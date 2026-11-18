# Portfolio visual direction

Generated section references with the built-in image generation tool before implementation, following `.skills/gpt-taste/SKILL.md`. Reviewed the finished interface against `.skills/no-ai-slop/SKILL.md`.

## Reference analysis

- Hero: condensed heavyweight display type dominates the width. Navigation stays quiet; a three-column introduction pairs sans-serif role text with a larger serif description and one rectangular action. Full-width monochrome architecture anchors the opening.
- Work: open asymmetric gallery, image-led project covers, generous gutters, hairline rules, readable serif descriptions, plain technology lists. The second project is offset vertically on desktop.
- Experience: an editorial two-column composition, left-aligned heading and biography alongside an unboxed experience list. Dates use the accent color; company names lead the hierarchy.
- Contact: a flat vermilion field, large condensed heading, underlined LinkedIn action, and a compact footer. No gradients, rounded card containers, or decorative badges.

Implementation uses Barlow Condensed 800, DM Sans 400, and Newsreader 400, hosted locally. Ink `#141512` on vermilion `#e34832` meets 4.5:1 contrast for small text. Red links on white use the darker `#b83422`. Mobile reflows naturally into a single column and includes a working navigation menu. Motion is restricted to hover feedback and smooth anchor navigation, with reduced-motion support.

## Generation prompt set

Each prompt requested a high fidelity, standalone, desktop website section in a coherent white, charcoal and vermilion Swiss editorial design, with condensed display typography and Newsreader serif body text. Generated assets are visual references, not site content.

1. **hero.png:** Hero and navigation only. Small JB mark; Work, About, Contact navigation. Huge bold headline “Jonas Butrimas.” with vermilion period. Asymmetric role, full-stack/automation/machine-learning introduction, and rectangular “Explore my work” action. Wide monochrome architectural photograph below. Airy, readable, no cards, pills or gradients.
2. **work.png:** Selected work section only. Large “Selected work” heading and “A few things I’ve built.” Two asymmetric project columns for Aegis surveillance and Movie collection, clean architectural and cinematic image covers, project descriptions, plain technology names, GitHub links, hairline dividers. No nested cards or pills.
3. **experience.png:** Experience section only. Left heading “Built through experience.” and software engineering student introduction. Right open experience table for UAB Ainera ML/data science internship and Lithuanian Airports IT internship. Python text classification, scikit-learn, Linux, Cisco and DNS failover details. Generous whitespace and no fake statistics.
4. **contact.png:** Contact section only. Flat vermilion background and black type. Oversized “Have something in mind?” heading, underlined “Let’s connect” LinkedIn action, opportunities and projects introduction. Hairline divider and compact name, GitHub, LinkedIn and back-to-top footer.

## Photography

Photography is illustrative cover imagery, not screenshots of the projects. No project screenshots were present in the public repository trees or READMEs at implementation time.

- `public/images/architecture.jpg`: https://images.unsplash.com/photo-1487958449943-2429e8be8625
- `public/images/imgbrd.jpg`: user-provided Imageboard cover illustration (1920 × 1080). Displayed in its original aspect ratio.
- `public/images/cinema.jpg`: https://images.unsplash.com/photo-1489599849927-2ee91cede3ba

Font license files are included beside the fonts in `public/fonts/`.

The first featured project was subsequently changed from Aegis to [Imageboard](https://github.com/k0LecA/imageboard), then updated with the user-provided cover illustration. The original generated references record the initial design; the desktop and mobile previews reflect the current portfolio.
