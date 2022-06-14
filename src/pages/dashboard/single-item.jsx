import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/button";
import { dateTime } from '../../utils/helper';

const listTimeZone = [
    'Africa/Accra',
    'Africa/Algiers',
    'America/Antigua',
    'Asia/Dhaka',
    'Europe/Berlin',
    'Japan',
    'US/Alaska',
    'US/Eastern',
]


const SingleItem = ({ item, index, toggle, handleDelete }) => {
    const [timeZone, setTimeZone] = React.useState("Asia/Dhaka");


    return (
        <tr>
            <td>{++index}</td>
            <td>{item.name}</td>
            <td>{dateTime(item.datetime, timeZone)}</td>
            <td>{item.status === 1 ? 'Active' : 'Inactive'}</td>
            <td>
                <select
                    className='form-control'
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                >
                    {listTimeZone.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </td>
            <td>
                <Button
                    label={'Edit'}
                    variant={'primary'}
                    type={'button'}
                    clickHandler={() => toggle(item)}
                />
                <Button
                    label={'Delete'}
                    variant={'danger'}
                    type={'button'}
                    clickHandler={() => handleDelete(item.id)}
                    classes={'ms-3'}
                />
            </td>
        </tr>
    )
}

SingleItem.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
    toggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
SingleItem.defaultProps = {
    item: {},
    index: 0
}
export default SingleItem;