document.addEventListener('DOMContentLoaded', function(){
    // set year
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    const openBtns = [document.getElementById('open-reserve'), document.getElementById('reserve-hero')];
    const modal = document.getElementById('reserve-modal');
    const close = document.getElementById('close-modal');
    const cancel = document.getElementById('cancel-modal');
    const form = document.getElementById('reserve-form');
    const success = document.getElementById('reserve-success');

    function showModal(){ if(modal) modal.setAttribute('aria-hidden','false'); }
    function hideModal(){ if(modal){ modal.setAttribute('aria-hidden','true'); success && (success.classList.add('hidden')); form && (form.classList.remove('hidden')); }}

    openBtns.forEach(b=>{ if(b) b.addEventListener('click', showModal); });
    if(close) close.addEventListener('click', hideModal);
    if(cancel) cancel.addEventListener('click', hideModal);
    if(modal) modal.addEventListener('click', (e)=>{ if(e.target === modal) hideModal(); });

    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            if(!name || !phone){ alert('Vui lòng nhập họ tên và số điện thoại'); return; }
            // simulate success
            form.classList.add('hidden');
            if(success){ success.classList.remove('hidden'); }
            setTimeout(hideModal, 2200);
        });
    }
});
