import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/button";
import { getTimeCalculate } from '../../utils/helper';





const SingleCard = ({ item, toggle, handleDelete, handleStatus, timeZone }) => {
    const [time, setTime] = React.useState("00:00:00");


    React.useEffect(() => {
        if (item.status === 1) {
            const intervalTime = setInterval(() => {
                const { days, hours, minutes, seconds } = getTimeCalculate(item.datetime, timeZone);
                setTime(`${days}:${hours}:${minutes}:${seconds}`);
            }, 1000);

            return () => clearInterval(intervalTime);
        }
    }, [item, timeZone]);



    return (
        <div className='card me-3'>
            <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <div style={cardStyle}>{time}</div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <Button
                    label={'Edit'}
                    variant={'info'}
                    type={'button'}
                    clickHandler={() => toggle(item)}
                    classes={'btn-sm'}
                />
                <Button
                    label={item.status === 1 ? 'Active' : 'Inactive'}
                    variant={'primary'}
                    type={'button'}
                    clickHandler={() => handleStatus(item.id, item.status === 1 ? 0 : 1)}
                    classes={'btn-sm'}
                />
                <Button
                    label={'Delete'}
                    variant={'danger'}
                    type={'button'}
                    clickHandler={() => handleDelete(item.id)}
                    classes={'btn-sm'}
                />
            </div>
        </div>
    )
}

SingleCard.propTypes = {
    item: PropTypes.object,
    toggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleStatus: PropTypes.func.isRequired,
    timeZone: PropTypes.string.isRequired,
}
SingleCard.defaultProps = {
    item: {}
}
export default SingleCard;


const cardStyle = {
    height: "250px",
    width: "250px",
    lineHeight: "250px",
    textAlign: "center",
    border: "5px solid rgb(255 0 129)",
    borderRadius: "50%",
    fontSize: "40px",
    fontWeight: 'bold',
}