import router from '@system.router'

var picker1value = null;
var picker2value = null;
var pickerSeconds = null;

export default {
    data: {
        seconds: 0
    },
    clickAction() {
        router.replace({
            uri: 'pages/index/index'
        })
    },
    onInit() {
        picker1value = this.data1;
        picker2value = this.data2;

        if (picker1value == "1") {
            pickerSeconds = 60;
        } else if (picker1value == "2") {
            pickerSeconds = 120;
        } else if (picker1value == "3") {
            pickerSeconds = 180;
        }

        this.seconds = pickerSeconds;
    }
}
