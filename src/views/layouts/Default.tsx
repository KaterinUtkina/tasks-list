import React, {useContext} from 'react';
import TasksList from "../tasks/TasksList";
import NewsTicker from "../news-ticker/NewsTicker";
import {NewsTickerContext, NewsTickerContextType} from "../../provider/NewsTickerProvider";

function Default() {
    const {isVisible} = useContext(NewsTickerContext) as NewsTickerContextType;
    return (
        <div>
            <TasksList/>
            {isVisible ? (
                <NewsTicker/>
            ) : <></>}
        </div>
    );
}

export default Default;
