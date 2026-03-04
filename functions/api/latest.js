export async function onRequest() {
  const payload = {
    sourceUsed: "CACHED",
    lastUpdatedNPT: "20:41 NPT",
    links: {
      ecn: "https://result.election.gov.np/",
      media1: "https://election.ekantipur.com/?lng=eng",
      media2: "https://election.onlinekhabar.com/"
    },
    fptpRows: [
      { constituency:"Kathmandu-1", leader:"Prakash Man Singh", party:"NC", votes:15234, margin:1204, status:"LEADING" },
      { constituency:"Lalitpur-2", leader:"Krishna Lal Maharjan", party:"UML", votes:21450, margin:3100, status:"WON" },
      { constituency:"Jhapa-3", leader:"Rajendra Lingden", party:"RPP", votes:18900, margin:890, status:"LEADING" },
      { constituency:"Morang-5", leader:"Shiva Kumar Mandal", party:"JSP", votes:12100, margin:450, status:"LEADING" },
      { constituency:"Chitwan-4", leader:"Gagan Thapa", party:"NC", votes:28340, margin:5400, status:"WON" },
      { constituency:"Rupandehi-2", leader:"Bishnu Prasad Paudel", party:"UML", votes:19560, margin:2100, status:"LEADING" },
      { constituency:"Kaski-2", leader:"Rabi Lamichhane", party:"RSP", votes:32100, margin:12000, status:"WON" },
      { constituency:"Dhanusha-3", leader:"Bimalendra Nidhi", party:"NC", votes:14800, margin:120, status:"LEADING" }
    ],
    seatTally: [
      { party:"NC", leading:42, won:15, total:57 },
      { party:"UML", leading:38, won:18, total:56 },
      { party:"Maoist Center", leading:12, won:4, total:16 },
      { party:"RSP", leading:10, won:5, total:15 },
      { party:"RPP", leading:5, won:2, total:7 },
      { party:"Others", leading:10, won:4, total:14 }
    ],
    prRows: [
      { party:"UML", votes:1205400, pct:28.5 },
      { party:"NC", votes:1180200, pct:27.9 },
      { party:"RSP", votes:540100, pct:12.7 },
      { party:"Maoist Center", votes:480500, pct:11.3 },
      { party:"RPP", votes:290800, pct:6.8 },
      { party:"JSP", votes:150300, pct:3.5 }
    ],
    latestChanges: [
      { time:"20:38 NPT", text:"Rabi Lamichhane (RSP) officially wins Kaski-2 with a record margin." },
      { time:"20:25 NPT", text:"Vote gap narrows in Kathmandu-1; NC now leading by only 1,204 votes." },
      { time:"20:10 NPT", text:"New counting centers opened in Morang district. Expect rapid updates." },
      { time:"19:55 NPT", text:"UML secures Lalitpur-2. Official declaration made by returning officer." },
      { time:"19:30 NPT", text:"Early trends show RPP leading in Jhapa-3." },
      { time:"19:00 NPT", text:"PR vote counting begins in 15 additional districts." }
    ]
  };

  return new Response(JSON.stringify(payload), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
