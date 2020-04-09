import $ from 'jquery'
import './css/sample.css'
import './css/sample.less'
import './css/sample.scss'

$(function(){
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', 'lightgreen')
})