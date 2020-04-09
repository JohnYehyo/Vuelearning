import $ from 'jquery'
import './css/sample.css'
import './css/sample.less'
import './css/sample.scss'
import Vue from 'vue'
import App from './components/app.vue'

$(function(){
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', 'lightgreen')
})

const vm = new Vue({
    el: '#app',
    render: h=>h(App)
})