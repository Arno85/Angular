import { Rule, SchematicContext, Tree, url, apply, template, mergeWith, SchematicsException, move } from '@angular-devkit/schematics';
import { Schema } from './schema/schema';
import { strings } from '@angular-devkit/core';
import { buildDefaultPath } from '@schematics/angular/utility/project';
import { parseName } from '@schematics/angular/utility/parse-name';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function generate(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    console.log(options);
    const workspaceConfigBuffer = tree.read('angular.json');                  // read angular,json file as buffer
    if (!workspaceConfigBuffer) {                                             // is it an Angular workspace
      throw new SchematicsException('Not an Angular CLI workspace');
    }
    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());     // parse config
    const projectName = options.project;                                      // a project present in angular.json
    const project = workspaceConfig.projects[projectName];                    // get the project definition
    if (!project) {
      throw new SchematicsException('This project doesn\'t exists');
    }
    const defaultProjectPath = buildDefaultPath(project);                     // get default path of project (src/app)
    const parsedPath = parseName(defaultProjectPath, options.name);
    const { name, path } = parsedPath;

    const sourceTemplates = url('./templates');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ...options,
        ...strings,
        name
      }),
      move(path)
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, context);
  };
}
