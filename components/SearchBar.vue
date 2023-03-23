<template>
    <div>
        <form>
        <div class="searchbar">
            <input type="text" name="search" placeholder="Search by ingredients ..."/>
            <button type="submit" name="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-1 h-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
        </form>
    </div>
</template>

<style scoped>
    button {
        background-color: #FAD02C;
        padding: .75rem;
        color:white;
        border-radius: 100%;
        width: 65px;
        font-size: 1rem;
        cursor:pointer;
        border: none;
        margin: .75rem;
    }
    input {
        flex: 1;
        padding-left:2.75rem;
        padding-right: 1.25rem;
        font-size: 1.8rem;
        border-radius: 60px;
        outline: none;
        border:0;
    }

    .searchbar {
        width:1000px;
        font-size: 1rem;
        border-radius: 60px;
        background-color: white;
        display:flex;
        align-items: center;
        justify-content: space-between;
        overflow:hidden;
        filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)); 
        margin-left: auto;
        margin-right: auto;
    }
</style>

<script>
export default {
    name: 'searchbar',
}
</script>