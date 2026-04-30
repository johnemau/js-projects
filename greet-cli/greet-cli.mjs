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
const localDate = new Date(formattedTime);
const localHours = localDate.getHours();
const isMorning = localHours < 12;
const isAfernoon = localHours >= 12 && localHours < 17;
const isEvening = localHours >= 17;

const timedString = isMorning ? 'morning' : isAfernoon ? 'afternoon' : 'evening';
const timedGreeting = `Good ${timedString}, ${name}. The time is ${formattedTime}`;

console.log(timedGreeting);