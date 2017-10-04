import moment from 'moment';

const dateFormat = "DD.MM.YYYY HH:mm";
const serverDateFormat = 'YYYY-MM-DDTHH:mm:ss';

export default helper = {

    formatDate (dateString) {
        return moment(dateString).format(dateFormat);;
    },

    toServerTime (timestamp) {
        return moment(new Date(timestamp*1000)).format(serverDateFormat);
      }
}