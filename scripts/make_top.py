# -*- coding: utf-8 -*-

import argparse
import pathlib
from typing import Dict, Optional, Union
import pprint
import re

class Args:
    def __init__(self, directory_path: pathlib.Path) -> None:
        self.directory_path = directory_path

def main():
    args = parse_args()
    for path in args.directory_path.glob('**/index.html'):
        linkpath = re.sub(r"\\", r"/", str(path.relative_to(args.directory_path)))
        html = f'''
        <a href="./projects/{linkpath}" style="position: relative; display: inline-block;">
            <iframe width=1430 height=430 src="./projects/{linkpath}"></iframe>
        </a>
        <br />
'''
        print(html)

def parse_args() -> Args:
    parser = argparse.ArgumentParser()
    parser.add_argument("directory_path", type=pathlib.Path, help="Target directory path")
    args = parser.parse_args()

    return Args(args.directory_path)

if __name__ == "__main__":
    main()
