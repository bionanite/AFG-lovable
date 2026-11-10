<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep trading office details in `src/content/locations.ts` and registered entity details in `src/content/legal.ts`; contact pages and office listings reuse shared records so the two address types remain distinct.
- Keep sector search intent, scope, preparation, resource links and supplementary questions in the shared sector search content module; the sector route renders the same questions in visible content and structured data to prevent divergence.
- Emit social image metadata only for an explicitly supplied absolute page image; a generic fallback must not misrepresent sector content.
