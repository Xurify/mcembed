import React from "react";
import CodeBlock from "./CodeBlock";

export default function Documentation() {
  return (
    <div className="prose prose-zinc dark:prose-invert mx-auto max-w-none">
      <h1 id="introduction" className="text-3xl font-bold mb-6">
        Introduction
      </h1>
      <p className="text-lg mb-6">
        <strong>MCEmbed</strong> is a wrapper service for{" "}
        <strong>Modrinth</strong> and <strong>CurseForge</strong> embed badges.
        It provides a unified interface to generate badges for your Minecraft
        projects that can be embedded in GitHub READMEs, websites, and more.
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>
          We support both Modrinth and CurseForge projects with a unified API.
        </li>
        <li>
          Generated badges include project information like downloads, versions,
          etc.
        </li>
        <li>
          You can customize the appearance with different variants and themes.
        </li>
        <li>
          Easy to integrate with Markdown, HTML, or any other platform that
          supports images.
        </li>
      </ul>

      <h2 id="how-it-works" className="text-2xl font-bold mt-12 mb-4">
        How it works
      </h2>
      <p className="mb-6">
        You pass the project ID and a set of parameters. MCEmbed will then fetch
        the project information from either Modrinth or CurseForge, generate a
        badge image, and display it. These badges can then be embedded in your
        README files, websites, or documentation.
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Default Badges</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <img
            src="https://modrinth-embed.vercel.app/IRm6z3S7.png"
            alt="Elytra Assistant on Modrinth"
            width="340"
            className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
          />
          <img
            src="https://curseforge-embed.vercel.app/1181141.png"
            alt="Elytra Assistant on CurseForge"
            width="340"
            className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
          />
        </div>
      </div>

      <CodeBlock
        html={`<!-- MCEmbed -->
<img src="https://mcembed.vercel.app/m/IRm6z3S7.png" alt="Elytra Assistant on Modrinth">
<img src="https://mcembed.vercel.app/cf/1181141.png" alt="Elytra Assistant on CurseForge">`}
        markdown={`![Elytra Assistant](https://mcembed.vercel.app/m/IRm6z3S7.png)
![Elytra Assistant](https://mcembed.vercel.app/cf/1181141.png)`}
        className="mb-8"
      />

      <h2 id="modrinth-embed" className="text-2xl font-bold mt-12 mb-4">
        Modrinth Embed
      </h2>
      <p className="mb-6">
        Generate dynamic badge images for Modrinth projects with customizable
        styles and information.
      </p>

      <h3 className="text-xl font-bold mb-4">Usage</h3>
      <CodeBlock code="/m/:id.png" language="bash" className="mb-4" />

      <p className="mb-2">
        Where <code>:id</code> is the Modrinth project ID or slug.
      </p>

      <p className="mb-4 font-medium">Example:</p>
      <div className="mb-4">
        <img
          src="https://modrinth-embed.vercel.app/IRm6z3S7.png"
          alt="Elytra Assistant on Modrinth"
          width="340"
          className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
        />
      </div>
      <CodeBlock code="/m/IRm6z3S7.png" language="bash" className="mb-8" />

      <h3 className="text-xl font-bold mb-4">Options</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800">
              <th className="border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-left">
                Parameter
              </th>
              <th className="border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-left">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>variant</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Badge style (default, compact, full)
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>theme</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Color theme (dark, light)
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>showDownloads</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Show download count (true, false)
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>showVersion</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Show version number (true, false)
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>showButton</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Show download button (true, false) - full variant only
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="curseforge-embed" className="text-2xl font-bold mt-12 mb-4">
        CurseForge Embed
      </h2>
      <p className="mb-6">
        Generate dynamic badge images for CurseForge projects with customizable
        styles and information.
      </p>

      <h3 className="text-xl font-bold mb-4">Usage</h3>
      <CodeBlock code="/cf/:id.png" language="bash" className="mb-4" />

      <p className="mb-2">
        Where <code>:id</code> is the CurseForge project ID (numeric).
      </p>

      <p className="mb-4 font-medium">Example:</p>
      <div className="mb-4">
        <img
          src="https://curseforge-embed.vercel.app/1181141.png"
          alt="Elytra Assistant on CurseForge"
          width="340"
          className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
        />
      </div>
      <CodeBlock code="/cf/1181141.png" language="bash" className="mb-8" />

      <h3 className="text-xl font-bold mb-4">Options</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800">
              <th className="border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-left">
                Parameter
              </th>
              <th className="border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-left">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>variant</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Badge style (default, compact, full)
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>theme</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Color theme (dark, light)
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>showDownloads</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Show download count (true, false)
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>showVersion</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Show version number (true, false)
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                <code>showButton</code>
              </td>
              <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-2">
                Show download button (true, false) - full variant only
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="variants" className="text-2xl font-bold mt-12 mb-4">
        Badge Variants
      </h2>

      <h3 className="text-xl font-bold mb-4">Default</h3>
      <div className="mb-4">
        <img
          src="https://modrinth-embed.vercel.app/IRm6z3S7.png"
          alt="Elytra Assistant Default Badge"
          width="340"
          className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
        />
      </div>

      <h3 className="text-xl font-bold mb-4">Compact</h3>
      <div className="mb-4">
        <img
          src="https://modrinth-embed.vercel.app/IRm6z3S7.png?variant=compact"
          alt="Elytra Assistant Compact Badge"
          height="32"
          className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
        />
      </div>

      <h3 className="text-xl font-bold mb-4">Full</h3>
      <div className="mb-4">
        <img
          src="https://modrinth-embed.vercel.app/IRm6z3S7.png?variant=full"
          alt="Elytra Assistant Full Badge"
          width="600"
          className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
        />
      </div>

      <h2 id="integration-examples" className="text-2xl font-bold mt-12 mb-4">
        Integration Examples
      </h2>
      <h3 className="text-xl font-bold mb-4">Markdown (GitHub README)</h3>
      <CodeBlock
        code={`![Elytra Assistant](https://mcembed.vercel.app/m/IRm6z3S7.png)
![Elytra Assistant](https://mcembed.vercel.app/cf/1181141.png)`}
        language="markdown"
        className="mb-6"
      />

      <h3 className="text-xl font-bold mb-4">HTML</h3>
      <CodeBlock
        code={`<a href="https://modrinth.com/mod/elytra-assistant">
  <img src="https://mcembed.vercel.app/m/IRm6z3S7.png" alt="Elytra Assistant on Modrinth">
</a>

<a href="https://www.curseforge.com/minecraft/mc-mods/elytra-assistant">
  <img src="https://mcembed.vercel.app/cf/1181141.png" alt="Elytra Assistant on CurseForge">
</a>`}
        language="html"
        className="mb-8"
      />

      <h2 id="customization-examples" className="text-2xl font-bold mt-12 mb-4">
        Examples with Options
      </h2>

      <h3 className="text-xl font-bold mb-4">
        Modrinth Full Badge (Light theme)
      </h3>
      <div className="mb-4">
        <img
          src="https://modrinth-embed.vercel.app/IRm6z3S7.png?variant=full&theme=light"
          alt="Elytra Assistant Light Theme Full Badge"
          width="600"
          className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
        />
      </div>
      <CodeBlock
        code="https://mcembed.vercel.app/m/IRm6z3S7.png?variant=full&theme=light"
        language="url"
        className="mb-6"
      />

      <h3 className="text-xl font-bold mb-4">
        CurseForge Compact Badge (Dark theme, no downloads)
      </h3>
      <div className="mb-4">
        <img
          src="https://curseforge-embed.vercel.app/1181141.png?variant=compact&showDownloads=false"
          alt="Elytra Assistant CurseForge Compact Badge"
          height="32"
          className="rounded shadow-sm border border-zinc-200 dark:border-zinc-800"
        />
      </div>
      <CodeBlock
        code="https://mcembed.vercel.app/cf/1181141.png?variant=compact&showDownloads=false"
        language="url"
        className="mb-6"
      />

      <h3 className="text-xl font-bold mb-4">Example Usage in Documentation</h3>
      <CodeBlock
        html={`<!-- For MCEmbed --> 
<img src="https://mcembed.vercel.app/m/IRm6z3S7.png?variant=full" alt="Mod badge">`}
        markdown={`![Mod badge](https://mcembed.vercel.app/m/IRm6z3S7.png?variant=full)`}
        className="mb-6"
      />
    </div>
  );
}
