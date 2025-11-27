# nurumayu-devtools Project Overview

## Project Summary
**nurumayu-devtools** is a Web development toolkit for JavaScript code quality improvement, written in Bash.

## Current Implementation Status (~40% Complete)

### ✅ Complete Components (100%)
- **nurumayu-dev**: Main CLI entry point with command routing, help system, version management
- **lib/common.sh**: Production-ready shared library with logging, utilities, file operations, template generation
- **Test Infrastructure**: 50 test patterns across 5 categories with answer_key.json validation

### ⚠️ Partial Implementation (~60%)
- **detect_dup**: JavaScript code duplication detection tool (1777 lines)
  - Known Issue: Syntax error around line 800
  - 5 detection types: BASIC (95%), TEXT (85%), STRUCTURAL (70%), PATTERNS (60%), FUNCTIONAL (65%)
  - Features: Multiple window sizes, JSON/CSV output, parallel processing
  - Expected overall detection rate: 75%

### 📋 Planned (0%)
- **commentDensity**: Code comment density analysis
  - Research phase complete (see commentDensity/コメント密度.txt)
  - Target: 20-40% project-wide, 10-30% function-level
  - Based on Arafat & Riehle (2009), He (2019) research

## Architecture

### CLI Framework Pattern
- Unified command interface: `nurumayu-dev <command> [options] [args]`
- Extensible design using case statements for command routing
- Shared library provides consistent UX across all tools
- Template generation for easy tool addition

### Key Features
- Multi-format output: Console (colored), JSON, CSV
- CI/CD integration ready
- Comprehensive error handling
- Cross-platform (Linux, macOS)
- Bash 4.0+ required

## Development Priorities
1. **Critical**: Fix detect_dup syntax error (line 800)
2. **High**: Implement commentDensity tool
3. **Medium**: Add CSS duplication detection, security scanner
4. **Low**: Web UI, IDE plugins, ML-based detection

## File Locations
- Main CLI: `/nurumayu-dev`
- Shared library: `/lib/common.sh`
- detect_dup: `/detect_dup/detect_dup`
- Test data: `/detect_dup/test_data/` (50 patterns)
- Comment research: `/commentDensity/コメント密度.txt`

## Documentation
- Main README: Comprehensive, truth-based, includes troubleshooting
- detect_dup README: Tool-specific detailed documentation
- Development guides included for contributors
