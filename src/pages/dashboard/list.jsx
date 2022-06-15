import React from "react";
import PropTypes from 'prop-types';
import { isObjEmpty } from "../../utils/object-util";
import SingleCard from "./single-card";



const listTimeZone = [
    {
        label: 'Asia/Dhaka',
        value: '+06'
    },
    {
        label: 'America/New_York',
        value: '-05'
    },
    {
        label: 'Asia/Bangkok',
        value: '+07'
    },
    {
        label: 'Asia/Singapore',
        value: '+08'
    },
    {
        label: 'Europe/Paris',
        value: '+01'
    },
    {
        label: 'Europe/London',
        value: '+00'
    }
]

const List = ({ data, toggle, handleDelete, handleStatus }) => {
    const [timeZone, setTimeZone] = React.useState('+06');




    return (
        <div className="pt-5">
            <div className="d-flex justify-content-between">
                <h4>List of Clock</h4>
                <select
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                >
                    {listTimeZone.map(item =>
                        <option key={item.value} value={item.value}>{item.label}</option>
                    )}
                </select>
            </div>
            <div className="d-flex justify-content-start">
                {!isObjEmpty(data) && Object.values(data).map((item, index) => <SingleCard
                    key={item.id}
                    index={index}
                    item={item}
                    toggle={toggle}
                    handleDelete={handleDelete}
                    handleStatus={handleStatus}
                    timeZone={timeZone}
                />)}
            </div>
        </div>
    )
}

List.propTypes = {
    data: PropTypes.object,
    toggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleStatus: PropTypes.func.isRequired,
}
List.defaultProps = {
    data: {}
}
export default List;