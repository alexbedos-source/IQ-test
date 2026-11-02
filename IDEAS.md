# IQ Lab ideas backlog

Ideas for making the app better. The nightly session builds **small** items marked *auto* on its own (one per night, in the
nightly pull request). Items marked *needs approval* are bigger or change how the app works: they are only built once the owner
says yes (reply in chat, or tick the box in a PR).

Status: `[ ]` not started · `[~]` in progress / in an open PR · `[x]` done.

## Small improvements (auto)
- [x] **Backup and restore:** export all progress to a file and import it again. iOS deletes a home-screen app's data if the icon is removed, so this protects streaks and history.
- [x] **Mistake bank:** collect every question answered wrongly (drill, A-level, IQ) into a "Review mistakes" session that comes back until it is answered correctly twice.
- [ ] **Weekly summary card** on the home screen: questions done, accuracy, streak, study minutes, compared with last week.
- [x] **Scratchpad:** a draw-with-your-finger panel on physics and A-level questions for quick working.
- [x] **Spaced repetition for physics interview questions:** bring back "Stuck" and "Needed hints" questions after 1, 3 and 7 days.
- [x] ~~**Light / dark mode switch**~~ (not needed: the theme is now black and orange in every mode).
- [~] **Bookmark questions** to revisit later, with a "Saved" list.
- [ ] **Topic heatmap** on the Progress page across all A-level topics.

- [x] **"Due today" summary on the home screen:** one line listing everything due (flashcards, interview reviews, mistakes, drill).

- [x] **Confidence check** before answering, with calibration on the Progress page (approved 1 Nov).
- [x] **Mixed 15:** interleaved questions across all subjects (approved 1 Nov).
- [x] **Report a question:** flag button that opens a pre-filled GitHub issue (approved 1 Nov).
- [ ] **Weekly goal + rest day:** weekly targets with a progress ring; one rest day keeps the streak.
- [ ] **Data booklet drill:** find and apply the right AQA data-booklet equation quickly.

## Bigger ideas (needs approval)
- [x] **Tutor twist** in mock interviews: the tutor changes a condition after you answer (approved 1 Nov).
- [x] **Sketch the graph:** sketch on the pad with axes, then compare with the real graph (approved 1 Nov).
- [ ] **Explain it back:** record a 30-second explanation and compare with the model answer's key points.
- [ ] **Command-word trainer** for AQA command words.
- [ ] **Interview day simulator:** two timed interviews with a break and a summary report.
- [ ] **Exam-style long answers:** 6-mark AQA Physics and 15/25-mark Economics questions with mark schemes for self-marking.
<!-- [~] items below were approved by the owner on 2026-11-01 -->
- [x] **Video explanations for wrong answers** (owner's long-term goal). First step: a "Watch an explanation" link on each review item that opens a YouTube search for that topic. Later: curated videos per topic.
- [x] **AQA required practicals section:** method, variables, graphs, uncertainties and safety for each of the 12 required practicals, with quiz questions.
- [ ] **Interview talk-time meter:** use the microphone level during a mock interview to show how much you spoke versus stayed silent (stays on the phone, nothing uploaded).
- [ ] **Countdown and daily plan:** enter the interview and exam dates; the home screen suggests what to do today based on weak topics.
- [ ] **Timed A-level mini-papers:** 20-minute mixed papers per subject with marks and a grade estimate.
- [ ] **Edexcel Maths large data set practice** questions.
