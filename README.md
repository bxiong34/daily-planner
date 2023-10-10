# 05 Third-Party APIs: Work Day Scheduler

## Description

This challenge is to create a work day scheduler where a user can type and save acitvities that are planned for the day in local storage. Depending on the time, the time block will also change color to show if the activity is in the past, present, or future time (past=grey, present=green, and future=yellow).

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Usage

When a user types an activity and click on the save button, their input will be saved into the local storage so that the user can access their activities they have planned for the day.

Live site: https://bxiong34.github.io/daily-planner/

![Alt text](<Assets/Screenshot 2023-10-10 at 5.48.09 PM.png>)

- - -
© 2023 Bao Xiong. All Rights Reserved.
