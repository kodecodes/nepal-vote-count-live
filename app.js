const $ = (id) => document.getElementById(id);

function formatNum(n){
  if (n === null || n === undefined) return "—";
  return new Intl.NumberFormat("en-US").format(n);
}

function setText(el, txt){ if (el) el.textContent = txt; }

function renderFPTP(rows){
  const tbody = $("tbl-fptp").querySelector("tbody");
  tbody.innerHTML = "";
  for (const r of rows){
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><strong>${r.constituency}</strong></td>
      <td>${r.leader}</td>
      <td class="party">${r.party}</td>
      <td class="num">${formatNum(r.votes)}</td>
      <td class="num"><span class="pos">+${formatNum(r.margin)}</span></td>
      <td class="center">
        <span class="badge ${r.status === "WON" ? "won" : "leading"}">${r.status}</span>
      </td>
    `;
    tbody.appendChild(tr);
  }
}

function renderSeatTally(rows){
  const tbody = $("tbl-seat").querySelector("tbody");
  tbody.innerHTML = "";
  for (const r of rows){
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="party">${r.party}</td>
      <td class="num"><span class="pos">${formatNum(r.leading)}</span></td>
      <td class="num">${formatNum(r.won)}</td>
      <td class="num"><strong>${formatNum(r.total)}</strong></td>
    `;
    tbody.appendChild(tr);
  }
}

function renderPR(rows){
  const tbody = $("tbl-pr").querySelector("tbody");
  tbody.innerHTML = "";
  for (const r of rows){
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="party">${r.party}</td>
      <td class="num">${formatNum(r.votes)}</td>
      <td class="num">${r.pct.toFixed(1)}%</td>
    `;
    tbody.appendChild(tr);
  }
}

function renderFeed(items){
  const feed = $("feed");
  feed.innerHTML = "";
  for (const it of items){
    const div = document.createElement("div");
    div.className = "feed-item";
    div.innerHTML = `
      <div class="time">${it.time}</div>
      <div class="feed-text">${it.text}</div>
    `;
    feed.appendChild(div);
  }
}

async function load(){
  try{
    const res = await fetch("/api/latest");
    const data = await res.json();

    setText($("pill-source"), `Source: ${data.sourceUsed}`);
    setText($("pill-updated"), `Last updated: ${data.lastUpdatedNPT}`);

    // links (optional)
    if (data.links){
      $("link-ecn").href = data.links.ecn || "#";
      $("link-media1").href = data.links.media1 || "#";
      $("link-media2").href = data.links.media2 || "#";
    }

    renderFPTP(data.fptpRows || []);
    renderSeatTally(data.seatTally || []);
    renderPR(data.prRows || []);
    renderFeed(data.latestChanges || []);
  } catch(e){
    // keep UI as-is if fetch fails
    console.error(e);
  }
}

setText($("year"), String(new Date().getFullYear()));
load();
setInterval(load, 60_000);
