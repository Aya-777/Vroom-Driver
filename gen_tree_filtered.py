import os
root = r'C:\Vroom Driver\Vroom\src'
no_recurse = {'node_modules', '.git', 'android/.gradle', 'android/app/.cxx', 'android/app/build', 'android/build', 'ios/Pods', 'ios/build'}
lines = []

def tree(path, prefix=''):
    entries = sorted(os.listdir(path))
    entries = [e for e in entries if not e.startswith('~')]
    for i, name in enumerate(entries):
        full = os.path.join(path, name)
        connector = '└── ' if i == len(entries) - 1 else '├── '
        lines.append(prefix + connector + name)
        rel = os.path.relpath(full, root).replace('\\', '/')
        if os.path.isdir(full):
            if rel in no_recurse or name in no_recurse or any(rel.startswith(n + '/') for n in no_recurse):
                continue
            extension = '    ' if i == len(entries) - 1 else '│   '
            tree(full, prefix + extension)

lines.append(os.path.basename(root) + '/')
tree(root, '')
with open('project_tree_filtered.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
print('written project_tree_filtered.txt')
