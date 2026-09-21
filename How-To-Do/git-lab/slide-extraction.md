# How to Extract Slides from GitLab Tutorial Videos

This guide documents how to capture slides/screenshots from the GitLab Beginner Tutorial video series using automated tools. Since YouTube blocks direct downloads (bot detection), this guide covers both the automated pipeline and manual approaches.

## Video Series Overview

| # | Title | Duration | Main Topic |
|---|---|---|---|
| 1 | Introduction and Getting Started | 9:00 | GitLab dashboard, project creation |
| 2 | Getting started with Git Commands | 20:22 | Git CLI basics: clone, commit, push |
| 3 | How to Fork a project | 6:09 | Forking and upstream sync |
| 4 | How to create SSH Key | 7:50 | SSH key generation and GitLab auth |
| 5 | How to install GitLab Runner on Mac OS | 14:52 | GitLab Runner setup on macOS |
| 6 | How to install GitLab Runner on Windows OS | 14:45 | GitLab Runner setup on Windows |
| 7 | GitLab CI/CD Getting Started | 22:10 | .gitlab-ci.yml and pipelines |

Playlist URL: https://www.youtube.com/playlist?list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_

---

## Option A: Automated Slide Extraction Pipeline

### Prerequisites

```bash
# Python packages
pip3 install yt-dlp numpy opencv-python scikit-image Pillow

# ffmpeg (choose your platform)
# macOS:  brew install ffmpeg
# Linux:  sudo apt-get install ffmpeg
# Windows (winget): winget install ffmpeg

# Optional: deno (JavaScript runtime for yt-dlp's YouTube extractor)
curl -fsSL https://deno.land/install.sh | sh
```

### Step 1: Clone the extraction tool

```bash
git clone https://github.com/cervoliu/youtube-slide-extracter.git
cd youtube-slide-extracter
```

### Step 2: Download the video

#### Method 2a: Direct (yt-dlp)

```bash
python3 extracter.py "https://www.youtube.com/watch?v=Jt4Z1vwtXT0"
```

#### Method 2b: With browser cookies (bypass YouTube bot detection)

Export cookies from your browser using the "Get cookies.txt" extension or run:

```bash
# Export cookies from Chrome/Chromium
yt-dlp --cookies-from-browser chrome "https://www.youtube.com/watch?v=Jt4Z1vwtXT0"
```

Then run the full pipeline:

```bash
python3 extracter.py "https://www.youtube.com/watch?v=Jt4Z1vwtXT0"
```

### Step 3: Review the extracted slides

After the pipeline runs, slides are saved in `tmp/slides/`:

```bash
ls tmp/slides/
# slide_001.png, slide_002.png, ...

# A merged PDF is also created:
open slides.pdf    # macOS
xdg-open slides.pdf  # Linux
start slides.pdf   # Windows
```

### Sample Pipeline Output

Running the pipeline on a test 60-second video produced:

```
detecting slide area and temporal range...
detected slide bbox: x=0, y=348, w=640, h=101
detected temporal range: 12.6s to 56.8s
extracted frames -> tmp/frames (from 12.6s to 56.8s, cropped to slide area)
processing pre-cropped frames...
diff stats: min=30.92, max=35.43, p75.0=35.37
using threshold: major=35.37, minor=21.22
detected 45 slides -> tmp/slides
merged 45 slides -> slides.pdf
```

---

## Option B: Manual Frame Extraction with ffmpeg

When yt-dlp fails due to bot detection, you can manually download a video (e.g., using a browser extension) and then extract frames:

### Step 1: Get the video file

Manually save the video to `How-To-Do/git-lab/screenshots/`:
- Use a YouTube downloader browser extension
- Save as `gitlab-video-01.mp4`, `gitlab-video-02.mp4`, etc.

### Step 2: Extract frames at specific timestamps

Based on each video's content, extract key slides:

```bash
# Video 1: Introduction and Getting Started (9:00)
ffmpeg -ss 00:00:05 -i gitlab-video-01.mp4 -frames:v 1 screenshots/01-title.png -y
ffmpeg -ss 00:01:30 -i gitlab-video-01.mp4 -frames:v 1 screenshots/02-dashboard.png -y

# Video 2: Git Commands (20:22)
ffmpeg -ss 00:00:10 -i gitlab-video-02.mp4 -frames:v 1 screenshots/03-git-clone.png -y

# Video 3: Fork a project (6:09)
ffmpeg -ss 00:01:15 -i gitlab-video-03.mp4 -frames:v 1 screenshots/04-fork-button.png -y

# Video 4: SSH Key (7:50)
ffmpeg -ss 00:02:00 -i gitlab-video-04.mp4 -frames:v 1 screenshots/05-ssh-keygen.png -y

# Video 5: GitLab Runner on Mac (14:52)
ffmpeg -ss 00:05:20 -i gitlab-video-05.mp4 -frames:v 1 screenshots/06-runner-register.png -y

# Video 6: GitLab Runner on Windows (14:45)
ffmpeg -ss 00:04:50 -i gitlab-video-06.mp4 -frames:v 1 screenshots/07-runner-windows.png -y

# Video 7: CI/CD (22:10)
ffmpeg -ss 00:02:30 -i gitlab-video-07.mp4 -frames:v 1 screenshots/08-gitlab-ci-yml.png -y
```

### Step 3: Extract all frames (1 per second)

```bash
mkdir -p screenshots/raw
ffmpeg -i gitlab-video-01.mp4 -vf fps=1 screenshots/raw/frame_%04d.png
```

Then manually review and keep the relevant slide frames.

### Step 4: Extract a segment

```bash
# Extract the first 2 minutes
ffmpeg -ss 00:00:00 -t 120 -i gitlab-video-01.mp4 -c copy excerpt.mp4
```

---

## Expected Key Timestamps per Video

### Video 1: Introduction and Getting Started (9:00)

| Timestamp | Content to Capture |
|---|---|
| 0:00-0:30 | Title screen / intro |
| 0:30-1:00 | GitLab dashboard overview |
| 1:00-2:00 | Creating a new project |
| 2:00-3:00 | Project settings and visibility |
| 3:00-4:00 | Navigating the project page |

### Video 2: Getting started with Git Commands (20:22)

| Timestamp | Content to Capture |
|---|---|
| 0:00-0:30 | Title screen |
| 0:30-1:00 | Git clone command |
| 2:00-3:00 | git status |
| 3:00-5:00 | Creating and editing files |
| 5:00-6:00 | git add and git commit |
| 7:00-8:00 | git push to GitLab |

### Video 3: How to Fork a project (6:09)

| Timestamp | Content to Capture |
|---|---|
| 0:00-0:30 | Title screen |
| 0:30-1:00 | Finding the Fork button |
| 1:00-2:00 | Forking in the web UI |
| 2:00-3:00 | Cloning the fork |
| 3:00-4:00 | Adding upstream remote |
| 4:00-5:00 | Syncing with upstream |

### Video 4: How to create SSH Key (7:50)

| Timestamp | Content to Capture |
|---|---|
| 0:00-0:30 | Title screen |
| 0:30-1:30 | ssh-keygen command |
| 1:30-2:30 | Adding SSH key to GitLab web UI |
| 2:30-3:30 | SSH key added confirmation |
| 3:30-5:00 | ssh -T git@gitlab.com test |
| 5:00-6:00 | Cloning with SSH |

### Video 5: GitLab Runner on Mac OS (14:52)

| Timestamp | Content to Capture |
|---|---|
| 0:00-0:30 | Title screen |
| 0:30-2:00 | Installing via Homebrew |
| 2:00-4:00 | gitlab-runner register command |
| 4:00-6:00 | Registration token location |
| 6:00-8:00 | Tags and executor selection |
| 8:00-10:00 | Runner registered successfully |
| 10:00-12:00 | Runner online in GitLab UI |

### Video 6: GitLab Runner on Windows OS (14:45)

| Timestamp | Content to Capture |
|---|---|
| 0:00-0:30 | Title screen |
| 0:30-2:00 | Downloading GitLab Runner binary |
| 2:00-4:00 | Installing as a service |
| 4:00-6:00 | Registering the runner |
| 6:00-8:00 | Shell executor setup |
| 8:00-10:00 | Runner showing online |
| 10:00-12:00 | Troubleshooting common errors |

### Video 7: GitLab CI/CD Getting Started (22:10)

| Timestamp | Content to Capture |
|---|---|
| 0:00-0:30 | Title screen |
| 0:30-2:00 | .gitlab-ci.yml structure |
| 2:00-4:00 | Stages and jobs definition |
| 4:00-6:00 | Pipeline visualization in GitLab |
| 6:00-8:00 | Job logs and debugging |
| 8:00-10:00 | Pipeline success |
| 10:00-12:00 | CI/CD best practices |

---

## Creating Slide Notes Documentation

After extracting slides, create a notes document for each video:

```markdown
# GitLab Tutorial Video 1: Introduction and Getting Started

## Slide 1 (0:05)
![Title screen](./screenshots/01-title.png)
- Introduces the GitLab Beginner Tutorial series
- Presenter: Automation Step by Step

## Slide 2 (0:35)
![Dashboard](./screenshots/02-dashboard.png)
- GitLab dashboard shows your projects
- Navigation menu on the left
- Activity feed in the center
```

Repeat for each video to build a complete reference guide.

---

## Troubleshooting

### YouTube bot detection ("Sign in to confirm")

1. Use `--cookies-from-browser chrome` with yt-dlp.
2. Or download manually using a browser extension like "Save from YouTube".
3. Or use `yt-dlp --extract-audio` for audio-only extraction.

### ffmpeg not found

Install ffmpeg:
- macOS: `brew install ffmpeg`
- Linux: `sudo apt-get install ffmpeg`
- Windows: `winget install ffmpeg`

### Slide detection finds too many slides

Lower the threshold in `slide_detection.py`:
```python
detect_slides(thresh=3.0, percentile=60.0, minor_factor=0.7)
```

### Slide detection finds too few slides

Raise the threshold:
```python
detect_slides(thresh=10.0, percentile=90.0, minor_factor=0.4)
```

### PDF merge fails

Install Pillow:
```bash
pip3 install Pillow
```

---

## Related Resources

- `gitlab-cheatsheet.md` — Git and GitLab command reference
- `How-To-Do/git-github/git-cheatsheet.md` — Git cheatsheet
- `.kilo/skills/youtube-slide-extract/` — skill documentation for this workflow
