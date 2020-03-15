import React from 'react';
import * as dateFns from "date-fns";
import './calendar.css'
import {connect} from 'react-redux'
import { calendarDateSelect, dispatchTodaysDate} from '../../redux/actions'

class Calendar extends React.Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    }

    componentDidMount(){

    }

    renderHeader(){
        const dateFormat = "MMMM yyyy";
        return (
            <div className="header row flex-middle">
            <div className="col col-start">
                <div className="icon" onClick={this.prevMonth}>
                chevron_left
                </div>
            </div>
            <div className="col col-center">
                <span>
                {dateFns.format(this.state.currentMonth, dateFormat)}
                </span>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
                <div className="icon">chevron_right</div>
            </div>
            </div>
        )
    }

    renderDays() {
        const dateFormat = "iiii";
        const days = [];
        let startDate = dateFns.startOfWeek(this.state.currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
            <div className="col col-center" key={i}>
                {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
            );
        }   
        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
            days.push(
            <div
                className={`col cell ${
                !dateFns.isSameMonth(day, monthStart)
                    ? "disabled"
                    : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() => this.props.dateClick(cloneDay)}
            >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
            </div>
            );
            day = dateFns.addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
            {days}
            </div>
        );
        days = [];
        }

        return <div className="body">{rows}</div>;
    }
    // return to line 74 if needed, but format is different. Recommended not to use parse due to different formatting
    /*dateFns.parse(cloneDay)*/

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
          });
    }

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
          });
    }

    render(){
        return (
            <div className='calendar'>
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dateClick: (day) => dispatch(calendarDateSelect(day)),
    }
}


export default connect(null, mapDispatchToProps)(Calendar)