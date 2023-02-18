<script>
    import { onMount } from 'svelte';
    import Card from './Card.svelte';
    import Header from './Header.svelte';

    let searchUrl = {
        'characters': 'https://rickandmortyapi.com/api/character/?',
        'nameChars': 'https://rickandmortyapi.com/api/character/?name='
    }

    let page = 1;
    // let pager = [1, 2, 3, 4, 5];
    let pager = [];
    let info = [];
    let chars = [];
    let charSearch = '';
    // let prevBtn, nextBtn;

    onMount( updatePage(page, charSearch) );

    async function updatePage(loadPage, charSearch) {
        let filterQuery = `?page=${loadPage}`
        if ('' !== charSearch)
        {
            filterQuery += `&name=${charSearch}`;
        }
        const response = await fetch(searchUrl.characters+filterQuery);
        let data = await response.json();
        chars = data.results;
        info = data.info;
        console.log(info,page);
    }

    $: {
            if (info.pages > 0 && page <= info.pages)
            {
                // pager = [];
                // carga de forma dinamica 5 paginas
                if (page <= 3) // si estamos en una de las 3 primeras paginas, solo apareceran de la 1 a la 5
                {
                    pager = [1, 2, 3, 4, 5];
                }
                else if (page >= info.pages - 2) // si estamos en las ultimas 3 paginas, solo apareceran las ultimas 5 paginas
                {
                    pager = [info.pages - 4, info.pages - 3, info.pages - 2, info.pages - 1, info.pages];
                }
                else // si estamos en una página intermedia, aparecerán las 5 páginas que rodean a la actual
                {
                    pager = [page - 2, page - 1, page, page + 1, page + 2];
                }
                // console.log(page);
            }
    }
</script>

<Header></Header>
<div id="filtros" class="flex justify-center">
    <input type="search" name="nombre" id="nombre" bind:value={charSearch} class="border-black border-2">
    <span>buscar</span>
</div>
<div class="sm:flex flex-wrap max-w-screen-xl flex-row m-auto justify-center">
<!--<div class="mr-auto ml-auto grid max-w-screen-xl gap-10 md:grid-cols-2 sm:mx-auto">-->
    {#each chars as r}
        <Card image="{r.image}" name="{r.name}" status="{r.status}" gender="{r.gender}" species="{r.species}" origin="{r.origin.name}"></Card>
    {/each}
</div>

<div id="pager" class="sm:flex flex-wrap max-w-screen-xl flex-row m-auto justify-center">
    {#if null === info.prev}
<!--        <button on:click={() => updatePage(page -= 1)} disabled>prev</button>-->
    {:else}
        <button on:click={() => updatePage(page -= 1)}>prev</button>
    {/if}
    {#each pager as p}
        {#if p === page}
            <button class="activo" on:click={() => updatePage(page = p)}>{p}</button>
        {:else}
            <button on:click={() => updatePage(page = p)}>{p}</button>
        {/if}
    {/each}
    {#if null === info.next}
<!--        <button on:click={() => updatePage(page += 1)} disabled>next</button>-->
    {:else}
        <button on:click={() => updatePage(page += 1)}>next</button>
    {/if}
</div>

<style>
    #pager button
    {
        @apply m-2 p-3 rounded-md border-black border-2;
    }

    #pager button:hover
    {
        @apply bg-black text-white;
    }

    #pager .activo
    {
        @apply bg-black text-white;
    }
</style>