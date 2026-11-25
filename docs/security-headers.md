# Cabeçalhos HTTP de segurança

Os cabeçalhos da aplicação estão em `next.config.ts`. A CSP permite scripts e
estilos inline para preservar a pré-renderização e as animações; por isso, não é
uma CSP estrita. Permissões adicionais de depuração e WebSocket existem apenas
em desenvolvimento. Após alterar a configuração, reconstrua a aplicação/imagem.
O HSTS será configurado no Nginx, responsável pelo HTTPS.

## Pendente: publicação na VPS

- Provisionar certificado válido para `signorge.com.br`, com renovação automática,
  e redirecionar HTTP para HTTPS preservando caminho e query.
- Com o Nginx no host, alterar a porta publicada no Compose de `3000:3000` para
  `127.0.0.1:3000:3000`, impedindo acesso externo direto ao Node.
- Encaminhar `Host`, `X-Forwarded-Proto` e os endereços do cliente. Preservar
  os cabeçalhos do Next.js, incluindo `Cache-Control` e `Vary`, e desabilitar
  o buffering para manter streaming/PPR.
- Configurar HSTS somente no servidor HTTPS do Nginx, com `always`: iniciar com
  `max-age=300`, passar para `max-age=86400` após os testes e aguardar pelo menos
  24 horas sem problemas antes de adotar `max-age=31536000`. Não habilitar
  `includeSubDomains` ou `preload` sem avaliar todos os subdomínios.
- Conferir a herança de `add_header` entre `server` e `location`: HSTS deve
  aparecer também em redirecionamentos HTTPS e erros gerados pelo Nginx. Não duplicar
  a CSP ou os demais cabeçalhos já enviados pelo Next.js.
- Não adicionar CORS ou liberar origens externas sem uma integração que exija isso.

## Validação antes e após publicar

1. Executar `npm run lint` e `npm run build`; confirmar que as páginas continuam
   pré-renderizadas. Testar a imagem Docker de produção.
2. Em desenvolvimento e produção, verificar no navegador a navegação, o menu,
   o carrossel, imagens, fontes e animações, inclusive com movimento reduzido.
   Conferir Console e Network para identificar violações de CSP e recursos bloqueados.
3. Conferir os cabeçalhos das páginas, redirecionamentos e erros. No PowerShell:

   ```powershell
   curl.exe -sS -D - -o NUL http://localhost:3000/
   curl.exe -sS -D - -o NUL https://signorge.com.br/
   curl.exe -sS -D - -o NUL http://signorge.com.br/
   ```

4. Após a publicação, validar certificado, redirecionamento, HSTS e acesso à porta
   do Node. Comparar as respostas públicas com as internas para identificar
   cabeçalhos removidos ou duplicados. Confirmar que `X-Powered-By` e `unsafe-eval`
   estão ausentes em produção.

O otimizador `/_next/image` usa uma CSP própria. O redirecionamento de barra final
pode ocorrer antes dos cabeçalhos personalizados do Next.js; verifique a página
de destino e o HSTS enviado pelo Nginx. Violações de CSP não são registradas
automaticamente nos logs de acesso: use o DevTools para acompanhá-las.
