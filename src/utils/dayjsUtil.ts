import buddhistEra from 'dayjs/plugin/buddhistEra';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(buddhistEra);

dayjs.tz.setDefault('Asia/Bangkok');
