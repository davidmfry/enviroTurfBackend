import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {database} from "../firebase";

// Make sure the change the fireBaseStatementId to one from the current firebase database

const fireBaseStatementId = "-LGv-eAUcZ8w3cDT4pPO";

class EditMissionStatment extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            statement: "",
        }
    }

    componentDidMount()
    {
        database.ref("missionstatement").child(fireBaseStatementId).on('value', (snapshot) => {
            const {statement} = snapshot.val();
            this.setState({
                statement
            })
        });

    }

    handleSubmit(e)
    {
        e.preventDefault();

        if (this.state.statement === '')
        {
            alert("Please enter a statement");
            return 0
        }

        let statementItem = {
            statement: this.state.statement,

        }

        database.ref("missionstatement").child(fireBaseStatementId).update(statementItem);

        this.props.history.push('/');
        // database.ref("missionstatement").push(statementItem);
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="">Enter Mission Statement</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            value={`${this.state.statement}`}
                            onChange={e => this.setState({statement: e.target.value})}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <button onClick={(e) => this.handleSubmit(e)} className="btn btn-success col-sm-12">Save</button>
                    </div>
                    <div>
                        <h2>Mission Statement Preview</h2>
                        <p>{`${this.state.statement}`}</p>
                    </div>
                </form>
            </div>
        );
    }
}

EditMissionStatment.propTypes = {};
EditMissionStatment.defaultProps = {};

export default EditMissionStatment;
