import React from 'react';
import TasksList from "../tasks/TasksList";
import NewsTicker from "../news-ticker/NewsTicker";

function Default() {
    return (
        <div>
            <TasksList/>
            {true ? (
                <NewsTicker/>
            ) : <></>}
        </div>
    );
}

export default Default;
