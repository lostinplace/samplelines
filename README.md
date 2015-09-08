NAME
====

samplelines - sample lines randomly from input

SYNOPSIS
========

**samplelines** \[**-p** *probability*\] \[**-s** *seed*\] \[*file*\]

DESCRIPTION
===========

Samplelines is a program that allows you to randomly sample lines from an incoming stream

OPTIONS
=======

**-p** | **--probability** \[*0-1*\]  
(required) a number between 0 and 1 indicating that a line be selected

**-s** | **--seed** \[*seed*\]  
a seed for the PRNG

*file*  
a file to read, if file is absent, input is stdin
