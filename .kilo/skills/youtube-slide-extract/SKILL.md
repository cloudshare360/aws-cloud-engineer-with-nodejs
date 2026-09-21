---
name: youtube-slide-extract
description: Extract screenshots and slides from YouTube videos (or any downloaded video) using yt-dlp, ffmpeg, and OpenCV. Use when the user wants to capture video frames, extract lecture slides, batch-grab screenshots at timestamps, or create a PDF of key frames from a tutorial video.
---

# YouTube Slide Extraction

This skill documents how to extract slides/screenshots from YouTube videos (or any downloaded video) for learning documentation, using the `youtube-slide-extracter` pipeline: `yt-dlp` + `ffmpeg` + OpenCV + scikit-image.

## Prerequisites

```bash
pip3 install yt-dlp numpy opencv-python scikit-image Pillow
# ffmpeg:
#   macOS:  brew install ffmpeg
#   Linux:  sudo apt-get install ffmpeg
#   Windows: winget install ffmpeg
```

Optional: install `deno` or `nodejs` as a JavaScript runtime for yt-dlp's YouTube extractor:

```bash
curl -fsSL https://deno.land/install.sh | sh
```

## Method 1: Automated Pipeline (cervoliu/youtube-slide-extracter)

Clone the tool:

```bash
git clone https://github.com/cervoliu/youtube-slide-extracter.git
cd youtube-slide-extracter
python3 extracter.py "<youtube_url>"
```

The pipeline runs four steps:

1. **Download** (`download_video.py`) — downloads the video via `yt-dlp` into `tmp/video/`
2. **Extract frames** (`frame_extraction.py`) — detects the slide area via variance analysis, then extracts 1 frame/second with `ffmpeg` into `tmp/frames/`
3. **Detect slides** (`slide_detection.py`) — compares consecutive frames using SSIM + edge density to find slide transitions, saving unique slides to `tmp/slides/`
4. **Merge PDF** (`pdf_merge.py`) — combines all slides into `slides.pdf`

### Working around YouTube bot detection

YouTube often blocks `yt-dlp` with "Sign in to confirm you're not a bot." To bypass:

```bash
# Export cookies from your browser using the Get cookies.txt extension
yt-dlp --cookies "cookies.txt" "https://youtube.com/watch?v=VIDEO_ID" -o "tmp/video.%(ext)s"
```

Or run yt-dlp with deno as the JS runtime:

```bash
yt-dlp --js-runtimes deno "https://youtube.com/watch?v=VIDEO_ID" -o "tmp/video.%(ext)s"
```

## Method 2: Manual Frame Extraction with ffmpeg

```bash
# Download a specific segment
yt-dlp -f best -o video.mp4 "https://youtube.com/watch?v=VIDEO_ID"

# Extract 1 frame per second for entire video
ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.png

# Extract a frame at a specific timestamp
ffmpeg -ss 00:01:30 -i video.mp4 -frames:v 1 -q:v 2 frame.jpg

# Batch extract at specific timestamps
ffmpeg -ss 00:00:05 -i video.mp4 -frames:v 1 slides/01-title.png -y
ffmpeg -ss 00:03:30 -i video.mp4 -frames:v 1 slides/02-content.png -y
ffmpeg -ss 00:08:15 -i video.mp4 -frames:v 1 slides/03-summary.png -y
```

## Method 3: Using the VS Code Extension

Install **Video Image Extractor** by Lijoy Kurian from the VS Code Marketplace:

1. `Ctrl+Shift+P` → **Extensions: Install Extensions**
2. Search: `Video Image Extractor`
3. Install and reload.

Use as a Copilot tool:

1. Open GitHub Copilot in VS Code.
2. Type: "Extract a frame at 2:30 from /path/to/video.mp4".
3. The tool runs ffmpeg and returns the frame path.

## Using the Extracted Slides

### Place in documentation

Save slides to a screenshots directory and reference them in Markdown:

```markdown
![Slide 1: Introduction](./screenshots/video-title-screen.png)
![Slide 2: Agenda](./screenshots/agenda-content.png)
```

### Create a slide guide document

Write step-by-step notes matching each slide:

```markdown
## Slide 1 — Title Screen (0:05)
This slide introduces the topic and presenter.

## Slide 2 — Learning Objectives (1:15)
Covers the three main takeaways from the video.
```

## Slide Detection Thresholds

When running the automated pipeline, tune these parameters in `slide_detection.py`:

| Parameter | Default | Description |
|---|---|---|
| `thresh` | `5.0` | Minimum diff score to register a slide change |
| `percentile` | `75.0` | Percentile-based adaptive threshold |
| `minor_factor` | `0.6` | Threshold for minor (cumulative) changes |

For tutorials with frequent visual changes (e.g., coding walkthroughs):
```python
detect_slides(thresh=10.0, percentile=90.0, minor_factor=0.4)
```

For presentations with long static slides:
```python
detect_slides(thresh=3.0, percentile=60.0, minor_factor=0.7)
```

## Tips

- **Remove unwanted frames**: Manually delete frames at the beginning/end of videos (intro/outro) using `remove_frames.py` or by deleting files in `tmp/frames/` before step 3.
- **Timestamp mapping**: The 1fps extraction means frame N corresponds to ~N seconds into the detected temporal range.
- **Slide numbering**: Slides are named `slide_001.png`, `slide_002.png`, ... in `tmp/slides/`.
- **Resolution**: Slides preserve the cropped area detected from the original video.

## Related

- `.kilo/skills/git-workflow/` — daily commit and branching discipline
- `.kilo/skills/fullstack-development/` — full-stack development workflow
