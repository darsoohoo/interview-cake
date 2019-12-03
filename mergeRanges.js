const ranges = [
  { startTime: 0,  endTime: 1 }, // Treat meeting with earlier start time as "first", and the other as "second."
  { startTime: 3,  endTime: 5 }, // If the end time of the first meeting is equal to or greater than the start time of the second
  { startTime: 4,  endTime: 8 }, // meeting, we merge the two meetings into one time range. The resulting time range's start
  { startTime: 10, endTime: 12 },// time is the first meeting's start, and its end time is the later of the two meetings' end times.
  { startTime: 9,  endTime: 10 },// Else we leave them separate
]

/*
MY SOLUTION
const mergeRanges = (meetings) => {
    
    let mergedMeetings = [];
    for (let i = 0; i < meetings.length; i++) {
        for (let j = i + 1; j < meetings.length; j++) {
            if (meetings[i].endTime >= meetings[j].startTime) {
                // merge the meetings
                // set the end time of the first meeting equal to the end time of the second meeting
                meetings[i].endTime = meetings[j].endTime;
                // remove the second meeting object
                meetings.splice(j, 1);
                i++
                j++
            } 

            if (meetings[i].startTime === meetings[j].endTime) {
                // merge the meetings
                // set the end time of the second meeting equal to the end time of the first meeting
                meetings[j].endTime = meetings[i].endTime;
                // remove the first meeting object
                meetings.splice(i, 1);
            } 
        }
    }
    return meetings;
}

console.log(mergeRanges(ranges))
*/

// INTERVIEW CAKES SOLUTION
function mergeRanges(meetings) {

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });
  
    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];
  
    for (let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting    = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  
      // If the current meeting overlaps with the last merged meeting, use the
      // later end time of the two
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      } else {
  
        // Add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }
  
    return mergedMeetings;
  }
  console.log(mergeRanges(ranges));