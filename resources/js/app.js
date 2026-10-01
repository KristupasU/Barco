import './bootstrap';
import flatpickr from "flatpickr";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.flatpickr').forEach(e1 => flatpickr(e1));
})

