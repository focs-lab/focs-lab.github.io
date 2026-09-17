{
  "title": "Scalable Statistical Root Cause Analysis on App Telemetry",
  "authors": [
    "Vijayaraghavan Murali",
    "Edward Yao",
    "umang",
    "Satish Chandra"
  ],
  "date": "2021-01-01T00:00:00Z",
  "publication_types": [
    "paper-conference"
  ],
  "publication": "ICSE (SEIP) 2021",
  "publication_short": "ICSE (SEIP) 2021",
  "abstract": "Despite engineering workflows that aim to prevent buggy code from being deployed, bugs still make their way into the Facebook app. When symptoms of these bugs, such as user submitted reports and automatically captured crashes, are reported, finding their root causes is an important step in resolving them. However, at Facebook's scale of billions of users, a single bug can manifest as several different symptoms according to the various user and execution environments in which the software is deployed. Root cause analysis (RCA) therefore requires tedious manual investigation and domain expertise to extract out common patterns that are observed in groups of reports and use them for debugging. We propose Minesweeper, a technique for RCA that moves towards automatically identifying the root cause of bugs from their symptoms. The method is based on two key aspects: (i) a scalable algorithm to efficiently mine patterns from telemetric information that is collected along with the reports, and (ii) statistical notions of precision and recall of patterns that help point towards root causes. We evaluate Minesweeper's scalability and effectiveness in finding root causes from symptoms on real world bug and crash reports from Facebook's apps. Our evaluation demonstrates that Minesweeper can perform RCA for tens of thousands of reports in less than 3 minutes, and is more than 85% accurate in identifying the root cause of regressions.",
  "featured": false,
  "links": [
    {
      "name": "ArXiv",
      "url": "https://arxiv.org/abs/2010.09974"
    },
    {
      "name": "Blog",
      "url": "https://engineering.fb.com/2021/02/09/developer-tools/minesweeper/"
    },
    {
      "name": "Video",
      "url": "https://www.youtube.com/watch?v=MQES_282F8I"
    },
    {
      "name": "Publication page",
      "url": "https://www.comp.nus.edu.sg/~umathur/publications/2021-icse-murali-root-cause-analysis/"
    }
  ],
  "doi": "10.1109/ICSE-SEIP52600.2021.00038"
}
