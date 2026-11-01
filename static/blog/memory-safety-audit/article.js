// These controls illustrate object bounds. They execute no allocator code.
(() => {
  const pool = document.querySelector('#pool-example .pool');
  if (!pool) return;
  const offsetLabel = document.querySelector('#offset-label');
  const objectVerdict = document.querySelector('#object-verdict');
  const objectDetail = document.querySelector('#object-detail');
  document.querySelectorAll('[data-offset-button]').forEach(button => {
    button.addEventListener('click', () => {
      const offset = button.dataset.offsetButton;
      const withinA = offset === '25';
      pool.dataset.offset = offset;
      pool.setAttribute('aria-label', `One 100-byte allocation contains object A at bytes 0 through 49 and object B at bytes 50 through 99. A write through A at offset ${offset} ${withinA ? 'stays within A' : 'lands inside B'}.`);
      offsetLabel.textContent = `Write through A at offset ${offset} → ${withinA ? 'stays within A' : 'lands in B'}`;
      document.querySelector('#asan-detail').textContent = `Byte ${offset} is inside the allocated block.`;
      objectVerdict.textContent = withinA ? 'Yes.' : 'No.';
      objectDetail.textContent = `Byte ${offset} belongs to ${withinA ? 'A' : 'B'}.`;
      document.querySelectorAll('[data-offset-button]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    });
  });
})();
