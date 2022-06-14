import React from "react";
import PropTypes from 'prop-types';
import { isObjEmpty } from "../../utils/object-util";
import Button from "../../components/button";



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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!isObjEmpty(data) && Object.values(data).map((item, index) => <tr key={item.id}>
                        <td>{++index}</td>
                        <td>{item.name}</td>
                        <td>{item.datetime}</td>
                        <td>{item.status === 1 ? 'Active' : 'Inactive'}</td>
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
                    </tr>)}
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