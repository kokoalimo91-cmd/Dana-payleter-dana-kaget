/* Ambil kode Gw! boleh aja.., asal Lu tau diri bre.
// Note: hargai pembuat kode dan tidak mengubah copyrigth.
// ©2026 - develofer By NLhost */
    (function(){
        var MAX_VISIBLE = 6;
        var UPDATE_INTERVAL = 3200;

        /* ===== DATA POOLS ===== */
        var namaDepan = ["Andi","Budi","Citra","Dewi","Eka","Fajar","Gita","Hana","Irfan","Joko","Kartika","Lina","Maya","Nadia","Oscar","Putri","Qori","Rizky","Sari","Taufik","Umi","Vina","Wahyu","Xena","Yuni","Zahra","Aditya","Bayu","Cahya","Dimas","Elma","Firman","Gilang","Hendra","Intan","Jasmine","Kevin","Laksmi","Mira","Naufal","Olivia","Prasetyo","Ratna","Surya","Tina","Umar","Vera","Wulan","Yusuf","Zaki","Amelia","Bagus","Cinta","Dian","Erlangga","Fitri","Galih","Haris","Indra","Jihan","Kirana","Luthfi","Mulyadi","Nurul","Oki","Pandu","Rendi","Shinta","Teguh","Ulfa","Vicky","Wira","Yance","Zulham","Arif","Bunga","Chandra","Deni","Endah","Faisal","Gerry","Hesti","Iqbal","Julia","Kurnia","Lestari","Mahmud","Nisa","Okta","Purnama","Rahmat","Siti","Tono","Usman","Vina","Wendi","Yoga","Zidan"];
        var namaBelakang = ["Pratama","Sari","Wijaya","Putri","Saputra","Kusuma","Lestari","Hidayat","Rahayu","Permana","Nugroho","Wibowo","Hartono","Susanto","Santoso","Kurniawan","Setiawan","Ramadhan","Prasetya","Anggraeni","Utami","Purnama","Maulana","Fitriani","Suryadi","Handoko","Sudirman","Wijayanti","Arifin","Budiman","Cahyadi","Darmawan","Effendi","Firmansyah","Gunawan","Hakim","Irawan","Jatmiko","Kartono","Laksono"];
        var layananData = [
            { key:"transfer", label:"Transfer", cls:"svc-transfer", svg:'<svg viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>' },
            { key:"qris", label:"QRIS", cls:"svc-qris", svg:'<svg viewBox="0 0 24 24"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h-2v4h2v2h-2v2h2v-2h2v-2h-2v-2h2v-2zm0 6h-2v2h2v-2z"/></svg>' },
            { key:"topup", label:"Top Up", cls:"svc-topup", svg:'<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>' },
            { key:"paylater", label:"PayLater", cls:"svc-paylater", svg:'<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>' },
            { key:"cicil", label:"Cicil", cls:"svc-cicil", svg:'<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>' },
            { key:"pulsa", label:"Pulsa", cls:"svc-pulsa", svg:'<svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>' },
            { key:"pln", label:"PLN", cls:"svc-pln", svg:'<svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>' },
            { key:"bpjs", label:"BPJS", cls:"svc-bpjs", svg:'<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>' },
            { key:"emoney", label:"E-Money", cls:"svc-emoney", svg:'<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>' }
        ];
        var kotaData = [
            { nama:"Jakarta", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Surabaya", tz:"Asia/Jakarta", wib:"WIB" },
            { nama:"Bandung", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Semarang", tz:"Asia/Jakarta", wib:"WIB" },
            { nama:"Medan", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Makassar", tz:"Asia/Makassar", wib:"WITA" },
            { nama:"Denpasar", tz:"Asia/Makassar", wib:"WITA" }, { nama:"Balikpapan", tz:"Asia/Makassar", wib:"WITA" },
            { nama:"Manado", tz:"Asia/Makassar", wib:"WITA" }, { nama:"Kupang", tz:"Asia/Makassar", wib:"WITA" },
            { nama:"Jayapura", tz:"Asia/Jayapura", wib:"WIT" }, { nama:"Sorong", tz:"Asia/Jayapura", wib:"WIT" },
            { nama:"Ambon", tz:"Asia/Jayapura", wib:"WIT" }, { nama:"Palembang", tz:"Asia/Jakarta", wib:"WIB" },
            { nama:"Yogyakarta", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Malang", tz:"Asia/Jakarta", wib:"WIB" },
            { nama:"Pontianak", tz:"Asia/Pontianak", wib:"WIB" }, { nama:"Banjarmasin", tz:"Asia/Makassar", wib:"WITA" },
            { nama:"Padang", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Pekanbaru", tz:"Asia/Jakarta", wib:"WIB" },
            { nama:"Batam", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Lampung", tz:"Asia/Jakarta", wib:"WIB" },
            { nama:"Bogor", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Bekasi", tz:"Asia/Jakarta", wib:"WIB" },
            { nama:"Tangerang", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Solo", tz:"Asia/Jakarta", wib:"WIB" },
            { nama:"Cirebon", tz:"Asia/Jakarta", wib:"WIB" }, { nama:"Manokwari", tz:"Asia/Jayapura", wib:"WIT" }
        ];
        var profileSeeds = [];
        for(var i=1;i<=80;i++) profileSeeds.push("dana"+i);
        var lastUsedSeeds = [];

        /* ===== DOM REFS ===== */
        var feedList = document.getElementById('liveFeedList');
        var liveCountEl = document.getElementById('liveCount');
        var statTotalEl = document.getElementById('statTotal');
        var statSuksesEl = document.getElementById('statSukses');
        var statNominalEl = document.getElementById('statNominal');
        var isAnimating = false;

        /* ===== INFLATED STATS — mulai dari angka besar ===== */
        var baseUserCount = 34278 + Math.floor(Math.random() * 2000);   // ~34rb user
        var baseNominalJuta = 2847 + Math.random() * 500;                // ~2.8M juta
        var totalUserCount = baseUserCount;
        var totalNominalJuta = baseNominalJuta;
        var successCount = Math.floor(totalUserCount * 0.82);
        var failCount = Math.floor(totalUserCount * 0.06);
        var totalTransactions = totalUserCount;
        var lastDeltaUser = 0;
        var lastDeltaNominal = 0;

        /* ===== HELPERS ===== */
        function getWaktuKota(tz) { try { return new Date().toLocaleTimeString('id-ID', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); } catch(e) { return '--:--:--'; } }
        function getTanggalKota(tz) { try { return new Date().toLocaleDateString('id-ID', { timeZone: tz, day: 'numeric', month: 'short', year: 'numeric' }); } catch(e) { return ''; } }
        function formatRp(n) { return 'Rp' + n.toLocaleString('id-ID'); }
        function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
        function randPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
        function getUniqueSeed() { var attempts = 0, seed; do { seed = randPick(profileSeeds); attempts++; } while(lastUsedSeeds.indexOf(seed) !== -1 && attempts < 20); lastUsedSeeds.push(seed); if(lastUsedSeeds.length > 12) lastUsedSeeds.shift(); return seed; }
        function generateNominal(svc) {
            var map = { transfer:[15000,5000000], qris:[5000,2500000], topup:[20000,1000000], paylater:[50000,8000000], cicil:[200000,3000000], pulsa:[10000,200000], pln:[30000,800000], bpjs:[25000,500000], emoney:[10000,500000] };
            var r = map[svc.key] || [10000,2000000];
            return randInt(r[0], r[1]);
        }
        function generateDesc(svc) {
            if(svc.key==='transfer') return 'Transfer ke rekening ****'+randInt(1000,9999);
            if(svc.key==='qris') return 'Pembayaran QRIS merchant';
            if(svc.key==='topup') return 'Top Up saldo DANA';
            if(svc.key==='paylater') return 'Pembayaran tagihan PayLater';
            if(svc.key==='cicil') return 'Cicil ke-'+randInt(1,6)+' DANA Cicil';
            if(svc.key==='pulsa') return 'Pulsa '+randPick(['Telkomsel','XL','Indosat','Tri','Smartfren'])+' '+randPick(['25rb','50rb','100rb']);
            if(svc.key==='pln') return 'Token PLN ID '+randInt(1000000000,9999999999);
            if(svc.key==='bpjs') return 'BPJS Kesehatan No '+randInt(1000000000,9999999999);
            if(svc.key==='emoney') return 'Isi saldo '+randPick(['GoPay','OVO','ShopeePay','Dana']);
            return 'Transaksi '+svc.label;
        }
        function getRandomStatus() { var r = Math.random() * 100; if(r < 78) return 'sukses'; if(r < 92) return 'proses'; return 'gagal'; }

        /* ===== SVG ICONS ===== */
        var clockSvg = '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 10 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>';
        var pinSvg = '<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';
        var walletSmallSvg = '<svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>';
        var verifiedSvg = '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>';
        var suksesSvg = '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
        var gagalSvg = '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

        /* ===== FORMAT ANGKA BESAR ===== */
        function formatBigNum(n) {
            if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
            if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
            return n.toString();
        }
        function formatNominalStat(n) {
            if (n >= 1000) return (n / 1000).toFixed(1) + 'M';
            return n.toFixed(1);
        }

        /* ===== UPDATE STATS DENGAN DELTA BADGE ===== */
        function updateStats(showDelta) {
            liveCountEl.textContent = randInt(180, 420);

            /* User Hari Ini */
            statTotalEl.textContent = formatBigNum(totalUserCount);

            /* Berhasil */
            var pct = totalTransactions > 0 ? Math.round((successCount / totalTransactions) * 100) : 0;
            statSuksesEl.textContent = pct + '%';

            /* Juta Terproses */
            statNominalEl.textContent = formatNominalStat(totalNominalJuta);

            /* Tampilkan delta badge jika diminta */
            if (showDelta) {
                showDeltaBadge('statTotal', lastDeltaUser, 'delta-up');
                showDeltaBadge('statNominal', lastDeltaNominal, 'delta-amber');
            }
        }

        function showDeltaBadge(parentId, value, cls) {
            var parent = document.getElementById(parentId);
            if (!parent || value <= 0) return;
            /* Hapus badge lama */
            var old = parent.querySelector('.stat-delta');
            if (old) old.parentNode.removeChild(old);
            /* Buat badge baru */
            var badge = document.createElement('span');
            badge.className = 'stat-delta ' + cls;
            badge.textContent = '+' + formatDeltaValue(value);
            parent.appendChild(badge);
            /* Auto hilang setelah 2.5 detik */
            setTimeout(function() {
                if (badge.parentNode) badge.parentNode.removeChild(badge);
            }, 2500);
        }

        function formatDeltaValue(v) {
            if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
            if (v >= 1000) return (v / 1000).toFixed(1) + 'K';
            return v.toString();
        }

        /* ===== BUAT ELEMEN AKTIVITAS ===== */
        function createActivityElement() {
            var nama = randPick(namaDepan) + ' ' + randPick(namaBelakang);
            var kota = randPick(kotaData);
            var svc = randPick(layananData);
            var nominal = generateNominal(svc);
            var saldo = randInt(50000, 25000000);
            var status = getRandomStatus();
            var seed = getUniqueSeed();
            var desc = generateDesc(svc);
            var waktu = getWaktuKota(kota.tz);
            var tanggal = getTanggalKota(kota.tz);
            var isVerified = Math.random() < 0.35;

            var amtClass = 'neutral', amtPrefix = '';
            if(svc.key === 'topup') { amtClass = 'positif'; amtPrefix = '+ '; }
            else if(status === 'sukses') { amtClass = 'negatif'; amtPrefix = '- '; }

            var statusLabel = status === 'sukses' ? 'Berhasil' : (status === 'proses' ? 'Proses' : 'Gagal');
            var badgeClass = 'badge-' + status;
            var badgeIcon = status === 'sukses' ? suksesSvg : gagalSvg;
            var itemClass = 'activity-item' + (status === 'sukses' ? ' sukses' : '');

            /* Tambah ke counter global */
            totalTransactions++;
            totalUserCount++;
            if(status === 'sukses') successCount++;
            if(status === 'gagal') failCount++;
            if(status !== 'gagal') {
                var addedJuta = nominal / 1000000;
                totalNominalJuta += addedJuta;
                lastDeltaNominal += addedJuta;
            }

            var el = document.createElement('div');
            el.className = itemClass + ' anim-enter';
            el.setAttribute('data-tz', kota.tz);
            el.innerHTML =
                '<div class="act-avatar-wrap"><img class="act-avatar" src="https://picsum.photos/seed/' + seed + '/84/84.jpg" alt="' + nama + '"><div class="act-avatar-badge ' + badgeClass + '">' + badgeIcon + '</div></div>' +
                '<div class="act-content"><div class="act-name">' + nama + (isVerified ? '<span class="act-verified-badge">' + verifiedSvg + '</span>' : '') + '</div>' +
                '<div class="act-detail"><span class="act-service-badge ' + svc.cls + '">' + svc.svg + ' ' + svc.label + '</span><span class="act-amount ' + amtClass + '">' + amtPrefix + formatRp(nominal) + '</span></div>' +
                '<div style="font-size:10px;color:#9ca3af;margin-top:1px;">' + desc + '</div>' +
                (status !== 'gagal' ? '<div class="act-balance-strip">' + walletSmallSvg + ' Saldo: <strong>' + formatRp(saldo) + '</strong></div>' : '') +
                '</div><div class="act-right-col"><div class="act-status status-' + status + '">' + statusLabel + '</div>' +
                '<div class="act-time">' + clockSvg + ' ' + waktu + '</div>' +
                '<div class="act-location">' + pinSvg + ' ' + kota.nama + ' (' + kota.wib + ')</div>' +
                '<div style="font-size:8px;color:#c4c9d4;margin-top:1px;">' + tanggal + '</div></div>';

            /* Jika status proses, atur timer untuk berubah */
            if (status === 'proses') {
                (function(itemEl) {
                    var delay = randInt(2000, 4000);
                    setTimeout(function() {
                        if (!itemEl.parentNode) return;
                        var newStatus = Math.random() < 0.85 ? 'sukses' : 'gagal';
                        var badge = itemEl.querySelector('.act-avatar-badge');
                        if (badge) {
                            badge.className = 'act-avatar-badge badge-' + newStatus;
                            badge.innerHTML = newStatus === 'sukses' ? suksesSvg : gagalSvg;
                        }
                        var sLabel = itemEl.querySelector('.act-status');
                        if (sLabel) { sLabel.className = 'act-status status-' + newStatus; sLabel.textContent = newStatus === 'sukses' ? 'Berhasil' : 'Gagal'; }
                        if (newStatus === 'sukses') { itemEl.classList.add('sukses'); successCount++; } else { failCount++; }
                        updateStats(false);
                        itemEl.style.transition = 'background 0.4s ease';
                        itemEl.style.background = newStatus === 'sukses' ? 'linear-gradient(135deg, #ecfdf5 0%, #fff 100%)' : 'linear-gradient(135deg, #fef2f2 0%, #fff 100%)';
                        setTimeout(function() { itemEl.style.background = ''; }, 1200);
                    }, delay);
                })(el);
            }

            return el;
        }

        /* ===== ITEM GAP ===== */
        function getItemGap() {
            var sample = document.createElement('div');
            sample.className = 'activity-item';
            sample.style.visibility = 'hidden';
            sample.style.position = 'absolute';
            sample.style.height = 'auto';
            sample.innerHTML = '<div class="act-avatar-wrap"><img class="act-avatar" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt=""></div><div class="act-content"><div class="act-name">X</div><div class="act-detail">X</div></div><div class="act-right-col"><div class="act-status">X</div></div>';
            feedList.appendChild(sample);
            var h = sample.offsetHeight;
            feedList.removeChild(sample);
            return h + 6;
        }

        /* ===== INISIALISASI FEED ===== */
        function initFeed() {
            feedList.innerHTML = '';
            var gap = getItemGap();
            feedList.style.height = (gap * MAX_VISIBLE - 6) + 'px';
            feedList.style.position = 'relative';

            for (var i = 0; i < MAX_VISIBLE; i++) {
                var el = createActivityElement();
                el.classList.remove('anim-enter');
                el.style.position = 'absolute';
                el.style.top = (i * gap) + 'px';
                el.style.left = '0';
                el.style.right = '0';
                feedList.appendChild(el);
            }
            /* Tampilkan statistik awal yang sudah besar */
            updateStats(false);
        }

        /* ===== SCROLL UPDATE ===== */
        function scrollUpdate() {
            if (isAnimating) return;
            isAnimating = true;

            /* Reset delta per cycle */
            lastDeltaUser = 0;
            lastDeltaNominal = 0;

            var items = feedList.querySelectorAll('.activity-item');
            if (items.length === 0) { isAnimating = false; return; }

            var gap = getItemGap();

            /* 1. Item paling atas: animasi hilang */
            var topItem = items[0];
            topItem.classList.add('anim-exit');

            /* 2. Sisanya geser ke atas */
            for (var i = 1; i < items.length; i++) {
                (function(idx) {
                    var item = items[idx];
                    var currentTop = parseFloat(item.style.top) || (idx * gap);
                    item.style.transition = 'top 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
                    item.style.top = (currentTop - gap) + 'px';
                })(i);
            }

            /* 3. Buat item baru di posisi bawah */
            var newItem = createActivityElement();
            newItem.style.position = 'absolute';
            newItem.style.top = ((items.length - 1) * gap) + 'px';
            newItem.style.left = '0';
            newItem.style.right = '0';
            feedList.appendChild(newItem);

            /* Hitung delta user untuk badge */
            lastDeltaUser = 1 + Math.floor(Math.random() * 3);

            /* 4. Geser item baru ke posisi benar */
            setTimeout(function() {
                var newItems = feedList.querySelectorAll('.activity-item');
                for (var j = 0; j < newItems.length; j++) {
                    newItems[j].style.transition = 'top 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
                    newItems[j].style.top = (j * gap) + 'px';
                }
            }, 100);

            /* 5. Bersihkan item yang keluar */
            setTimeout(function() {
                var allItems = feedList.querySelectorAll('.activity-item');
                for (var k = 0; k < allItems.length; k++) {
                    if (allItems[k].classList.contains('anim-exit')) {
                        feedList.removeChild(allItems[k]);
                        break;
                    }
                }
                var remaining = feedList.querySelectorAll('.activity-item');
                while (remaining.length > MAX_VISIBLE) {
                    feedList.removeChild(remaining[0]);
                    remaining = feedList.querySelectorAll('.activity-item');
                }
                var final = feedList.querySelectorAll('.activity-item');
                for (var f = 0; f < final.length; f++) {
                    final[f].style.transition = 'none';
                    final[f].style.top = (f * gap) + 'px';
                }
                /* Update stats dengan delta badge */
                updateStats(true);
                isAnimating = false;
            }, 700);
        }

        /* ===== UPDATE JAM REAL-TIME ===== */
        setInterval(function() {
            var items = feedList.querySelectorAll('.activity-item');
            for (var i = 0; i < items.length; i++) {
                var tz = items[i].getAttribute('data-tz');
                if (!tz) continue;
                var timeEl = items[i].querySelector('.act-time');
                if (timeEl) timeEl.innerHTML = clockSvg + ' ' + getWaktuKota(tz);
            }
        }, 1000);

        /* ===== MULAI ===== */
        setTimeout(function() {
            initFeed();
            setInterval(scrollUpdate, UPDATE_INTERVAL);
        }, 2000);

    })();