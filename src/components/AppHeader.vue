<template>
    <header>
        <nav class="desktop">
            <ul>
                <div><a href=""><img src="../assets/LOGOSITE.png" alt="logo site" class="logo"></a></div>
                <li class="items items-hover" id="init"><a href="/" title="Início">Início</a></li>
                <li class="items items-hover" id="about"><a href="#sobre" title="Sobre">Sobre</a></li>
                <li class="items items-hover" id="prjs"><a href="#paqueras" title="Paqueras">Paqueras</a></li>
                <li class="items items-hover" id="cont"><a href="#departamento" title="Departamento">Departamentos</a></li>
                <li class="items items-hover" id="cont"><a href="#contato" title="Contato">Contato</a></li>
                <li class="items items-hover" ><q-btn style="color:#aa96da;" icon="language" to="/ingles" /></li>
                
                        <input type="checkbox" id="checkbox-menu" class="btn-input">
            <label for="checkbox-menu" class="btn-label">
            <span></span>
            <span></span>
            <span></span>
            </label>
                <div class="menu-resp">

                    <a href="/" class="menuresp-item" title="Início">Início</a><br>

                    <a href="#sobre" class="menuresp-item" title="Sobre">Sobre</a><br>

                    <a href="#paqueras" class="menuresp-item" title="Paqueras">Paqueras</a><br>

                    <a href="#departamento" class="menuresp-item" title="Departamentos">Departamentos</a><br>

                    <a href="#contato" class="menuresp-item" title="Contato">Contato</a>
                    
                    <a style="color:white;"><q-btn to="/ingles" style="color:#aa96da;" icon="language" /></a>

        </div>
            </ul>
            

        </nav>
    </header>
</template>
