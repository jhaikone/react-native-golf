import { Platform } from 'react-native';

export default {
    right: Platform.OS === 'android' ? 'md-arrow-forward' : 'ios-arrow-forward',
    left: Platform.OS === 'android' ? 'md-arrow-back' : 'ios-arrow-back',
    star: Platform.OS === 'android' ? 'md-star' : 'ios-star',
    starOutline: Platform.OS === 'android' ? 'md-star-outline' : 'ios-star-outline',
    add: Platform.OS === 'android' ? 'md-add' : 'ios-add',
    remove: Platform.OS === 'android' ? 'md-remove' : 'ios-remove.outline',
}