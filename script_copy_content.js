// scripts/copy_dist.ts
import { copy } from "https://deno.land/std@0.224.0/fs/copy.ts";
import { exists } from "https://deno.land/std@0.224.0/fs/exists.ts";

const projectRoot = Deno.cwd();
const targetFolder = `${projectRoot}/`;
const sourceFolder = `${projectRoot}/../pool_aggregator_frontend/dist`;

if (!(await exists(sourceFolder))) {
  console.error(`❌ No se encontró la carpeta: ${sourceFolder}`);
  Deno.exit(1);
}

console.log(`📂 Copiando desde: ${sourceFolder}`);
console.log(`📥 Hacia: ${targetFolder}`);

await copy(sourceFolder, targetFolder, { overwrite: true });

console.log("✅ Archivos copiados correctamente.");
