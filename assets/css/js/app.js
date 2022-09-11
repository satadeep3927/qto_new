const tabs = document.querySelectorAll('.tab')
tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        let targetId = e.target.dataset.target
        document.querySelectorAll('.active').forEach((t) => t.classList.remove('active'))
        tab.classList.add('active')
        document.querySelector('.'+targetId).classList.add('active')
    })
})