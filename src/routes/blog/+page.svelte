<script lang="ts">
    const posts = import.meta.glob('./*.md', { eager: true });
    const data = Object.values(posts).map((x: any) => x.default.render().html);
</script>

{#each data as data}
    {@html data}
{/each}
