import React from "react";

const Display = ({ personData }) => {

    const personList = personData.map(user => {
        return (
            <React.Fragment key={user.email}>
                {/* Bootstrap 5 */}
                <div className="card" style={{ width: "18rem" }}>
                
                    <div className="card-body">
                        <h5 className="card-title"> Name: {user.firstname}</h5>
                        <p className="card-text">Email: {user.email}</p>
                        <p className="card-text">Contact: {user.contact}</p>
                        <p className="card-text">Birthday: {user.date.toLocaleDateString()}</p>
                        <a className="btn btn-primary"> DONE TASK 4</a>
                    </div>
                </div>
            </React.Fragment>
        )
    });

    return (
        <>
            {personList}
        </>
    )
}

export default Display;