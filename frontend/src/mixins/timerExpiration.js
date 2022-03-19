import { DateTime, Duration } from "luxon";

export default {
  data() {
    return {
      now: DateTime.local(),
      timer: null,
    };
  },
  props: {
    expiration: {
      // luxon DateTime object
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.timer = setInterval(() => (this.now = DateTime.local()), 1000);
  },
  unmounted() {
    clearInterval(this.timer);
  },
  computed: {
    remaining() {
      return this.expiration.diff(this.now).toObject();
    },
    displayTimer() {
      return Duration.fromObject(this.remaining).toFormat(
        `d'd' : hh'h' : mm'm' : ss's'`
      );
    },
  },
};
