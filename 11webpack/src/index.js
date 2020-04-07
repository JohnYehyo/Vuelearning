import $ from 'jquery'
import './css/sample.css'

$(function(){
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', 'lightgreen')
})