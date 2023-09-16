/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  monday,
  teusday,
  wednesday,
  thursday,
  fridey,
  saturday,
  sunday,
}

function isWeekend(days: Week): boolean {
  return Week.saturday === days || Week.sunday === days;
}
