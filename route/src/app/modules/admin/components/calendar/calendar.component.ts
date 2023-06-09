import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg, EventInput, EventSourceInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';
// import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @Input() calendarEvents: any[] = [];

  ssss: any;

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
    ],
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    // events: [
    //   { title: 'event 1', date: '2023-06-01' },
    //   { title: 'event 3', date: '2023-06-01' },
    //   { title: 'event 2', date: '2023-06-02' }
    // ],
    // select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  handleEventClick(clickInfo: EventClickArg) {
    alert(`Event name: '${clickInfo.event.title}'    Event Date: '${clickInfo.event.startStr}'`)
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  // ngOnChanges() {
  //   this.ssss = this.calendarEvents;
  //   console.log('jjjjjjjj');
  //   console.log(this.calendarEvents);
  //   console.log(this.ssss);
  //   this.changeDetector.detectChanges();
  // }

  // handleDateSelect(selectInfo: DateSelectArg) {
  //   const title = prompt('Please enter a new title for your event');
  //   const calendarApi = selectInfo.view.calendar;

  //   calendarApi.unselect(); // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       // id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     });
  //   }
  // }

}

