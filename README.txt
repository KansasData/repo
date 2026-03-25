================================================================================
KDSC WEBSITE — REPO GUIDE FOR MAINTAINERS
================================================================================

This is a Quarto website project. The rendered site lives in the docs/ folder
and is published from there. You should never edit files in docs/ directly —
edit the source .qmd files and re-render.

To add content, edit source files and render using RStudio or VS Code with the
Quarto extension. Rendering a single file only renders that file.

** DO NOT run a full site render ("quarto render" in the terminal). **
Some pages contain R code that retrieves data from a previous developer's
local hard drive and will fail. A full render would also overwrite the cached
output (in docs/) for every page, risking breaking working pages if there is
any Quarto version issue at the time. Render only the file(s) you are actively
working on.

--------------------------------------------------------------------------------
LIVE SITE — NAVIGATION PAGES
--------------------------------------------------------------------------------
These are the pages visible in the site's top navigation bar:

  index.qmd             Home page
  project.qmd           Community Data Lab (lists all project pages)
  curriculum.qmd        Curriculum (lists all module pages with filters)
  404.qmd               Placeholder for pieces not yet built

--------------------------------------------------------------------------------
LIVE SITE — CONTENT DIRECTORIES
--------------------------------------------------------------------------------
These directories contain the individual content pages linked from the nav pages
above. Add new content by adding files here.

  project/projects/     One .qmd file per Community Data Lab project
  project/datasets/     One .qmd file per CDL project (linked from project pages)
  project/classplan/    One .qmd file per CDL project (linked from project pages)
  module/module_workshop/   Workshop materials
  module/module_lecture/    Lecture slides and materials
  module/module_tutorial/   Tutorial content

--------------------------------------------------------------------------------
WORK IN PROGRESS — NOT YET LIVE
--------------------------------------------------------------------------------
These exist in the repo but are not reachable from the site navigation.
** Edit this section as new in-progress content is added or goes live. **

  project/classplan/    Class plan pages — in development, not yet linked
                        from project pages

--------------------------------------------------------------------------------
UNUSED / PRIOR-VERSION FILES — KEPT FOR REFERENCE
--------------------------------------------------------------------------------
These files are excluded from rendering via .quartoignore (see that file for
details and the reason each was excluded). Do NOT edit these if you are trying
to change something on the live website — they have no effect on what visitors
see.

  datalog.qmd           Draft data log page (incomplete, not linked)
  module.qmd            Old module listing — replaced by curriculum.qmd
  competency.qmd        Old competency listing — replaced by curriculum.qmd
  competency/           Old competency detail pages — replaced by flip cards
                        in curriculum.qmd
  dataset.qmd           Old dataset listing — datasets now accessed via
                        project pages
  course.qmd            Course listing page — course content not part of site
  course/               Course content files — not part of current site

--------------------------------------------------------------------------------
KEY CONFIGURATION AND SUPPORT FILES
--------------------------------------------------------------------------------
  _quarto.yml           Site-wide settings: navigation, theme, layout
  .quartoignore         Files excluded from rendering (with explanatory comments)
  styles.css            Global CSS overrides
  curriculum_style.css  CSS specific to the Curriculum page
  curriculum_style.ejs  Template for curriculum module listing cards
  datalog_style.css     CSS for the (unused) datalog page

================================================================================
