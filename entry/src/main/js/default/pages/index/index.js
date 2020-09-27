import router from '@system.router'

var picker1value = null;
var picker2value = null;

export default {
    data: {
        picker1range: ["1", "2", "3"],
        picker2range: ["较慢", "较缓", "较快"]
    },
    clickAction() {
        router.replace({
            uri: 'pages/xunlian/xunlian',
            params: {
                "data1": picker1value,
                "data2": picker2value
            }
        })
    },
    picker1change(pv) {
        picker1value = pv.newValue;
    },
    picker2change(pv) {
        picker2value = pv.newValue;
    }
}
