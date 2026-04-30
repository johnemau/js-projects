#!/usr/bin/env node

import proccess from 'node:process';

const name = proccess.argv[2] || 'John';
const timezone = process.argv[3] || 'UTC';

const TIMEZONE_ALIASES = {
    'PDT': 'America/Los_Angeles',
    'PST': 'America/Los_Angeles',
    'MST': 'America/Denver',
    'EST': 'America/New_York',
    'EDT': 'America/New_York',
};

const timezoneTranslated = TIMEZONE_ALIASES[timezone] ?? timezone;
const formattedTime = new Date().toLocaleString('en-US', { timeZone: timezoneTranslated, timeZoneName: 'short' });
const tzHour = Number(
    new Intl.DateTimeFormat('en-US', {
        timeZone: timezoneTranslated,
        hour: 'numeric',
        hour12: false,
    }).format(new Date())
);
const isMorning = tzHour < 12;
const isAfernoon = tzHour >= 12 && tzHour < 17;
const isEvening = tzHour >= 17;

const timedString = isMorning ? 'morning' : isAfernoon ? 'afternoon' : 'evening';
const timedGreeting = `Good ${timedString}, ${name}. The time is ${formattedTime}`;

console.log(timedGreeting);