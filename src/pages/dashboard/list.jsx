import React from "react";
import PropTypes from 'prop-types';
import { isObjEmpty } from "../../utils/object-util";
import SingleItem from "./single-item";



const List = ({ data, toggle, handleDelete }) => {
    return (
        <div className="pt-5">
            <h4>List of Clock</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Name</th>
                        <th>Date&Time</th>
                        <th>Status</th>
                        <th>TimeZone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!isObjEmpty(data) && Object.values(data).map((item, index) => <SingleItem
                        key={item.id}
                        index={index}
                        item={item}
                        toggle={toggle}
                        handleDelete={handleDelete}
                    />)}
                </tbody>
            </table>
        </div>
    )
}

List.propTypes = {
    data: PropTypes.object,
    toggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
List.defaultProps = {
    data: {}
}
export default List;