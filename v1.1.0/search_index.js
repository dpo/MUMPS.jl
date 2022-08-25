var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Pages = [\"api.md\"]","category":"page"},{"location":"api/#Constants","page":"API","title":"Constants","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"default_icntl\ndefault_cntl32\ndefault_cntl64\nmumps_unsymmetric\nmumps_definite\nmumps_symmetric","category":"page"},{"location":"api/#MUMPS.default_icntl","page":"API","title":"MUMPS.default_icntl","text":"Default integer parameters.\n\n\n\n\n\n","category":"constant"},{"location":"api/#MUMPS.default_cntl32","page":"API","title":"MUMPS.default_cntl32","text":"Default single precision real parameters\n\n\n\n\n\n","category":"constant"},{"location":"api/#MUMPS.default_cntl64","page":"API","title":"MUMPS.default_cntl64","text":"Default double precision real parameters\n\n\n\n\n\n","category":"constant"},{"location":"api/#MUMPS.mumps_unsymmetric","page":"API","title":"MUMPS.mumps_unsymmetric","text":"Constant indicating that a general unsymmetric matrix will be analyzed and factorized\n\n\n\n\n\n","category":"constant"},{"location":"api/#MUMPS.mumps_definite","page":"API","title":"MUMPS.mumps_definite","text":"Constant indicating that a symmetric definite matrix will be analyzed and factorized\n\n\n\n\n\n","category":"constant"},{"location":"api/#MUMPS.mumps_symmetric","page":"API","title":"MUMPS.mumps_symmetric","text":"Constant indicating that a general symmetric matrix will be analyzed and factorized\n\n\n\n\n\n","category":"constant"},{"location":"api/#Types","page":"API","title":"Types","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"MUMPSException\nMumps","category":"page"},{"location":"api/#MUMPS.MUMPSException","page":"API","title":"MUMPS.MUMPSException","text":"Exception type raised in case of error.\n\n\n\n\n\n","category":"type"},{"location":"api/#MUMPS.Mumps","page":"API","title":"MUMPS.Mumps","text":"Abstract type representing a factorization with MUMPS. All constructor arguments are optional. By default a general unsymmetric matrix will be analyzed/factorized with default integer and real parameters\n\n\n\n\n\n","category":"type"},{"location":"api/#Utilities","page":"API","title":"Utilities","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"get_icntl\nfinalize\nfactorize!\nsolve!\nsolve\nassociate_matrix!\nassociate_rhs!\nget_solution","category":"page"},{"location":"api/#MUMPS.get_icntl","page":"API","title":"MUMPS.get_icntl","text":"Obtain an array of integer control parameters.\n\n\n\n\n\n","category":"function"},{"location":"api/#Base.finalize","page":"API","title":"Base.finalize","text":"Terminate a Mumps instance.\n\n\n\n\n\nTerminate a Mumps instance.\n\n\n\n\n\nTerminate a Mumps instance.\n\n\n\n\n\nTerminate a Mumps instance.\n\n\n\n\n\n","category":"function"},{"location":"api/#MUMPS.factorize!","page":"API","title":"MUMPS.factorize!","text":"Factorize the matrix registered with the Mumps instance. The matrix must have been previously registered with associate_matrix(). After the factorization, the determinant, if requested, is stored in mumps.det. The MUMPS error code is stored in mumps.err. \n\n\n\n\n\nFactorize the matrix registered with the Mumps instance. The matrix must have been previously registered with associate_matrix(). After the factorization, the determinant, if requested, is stored in mumps.det. The MUMPS error code is stored in mumps.err. \n\n\n\n\n\nFactorize the matrix registered with the Mumps instance. The matrix must have been previously registered with associate_matrix(). After the factorization, the determinant, if requested, is stored in mumps.det. The MUMPS error code is stored in mumps.err. \n\n\n\n\n\nFactorize the matrix registered with the Mumps instance. The matrix must have been previously registered with associate_matrix(). After the factorization, the determinant, if requested, is stored in mumps.det. The MUMPS error code is stored in mumps.err. \n\n\n\n\n\nCombined associate_matrix / factorize. Presume that A is available on all nodes.\n\n\n\n\n\nCombined associate_matrix / factorize. Presume that A is available on all nodes.\n\n\n\n\n\n","category":"function"},{"location":"api/#MUMPS.solve!","page":"API","title":"MUMPS.solve!","text":"Solve the system registered with the Mumps object mumps. The matrix and right-hand side(s) must have been previously registered with associate_matrix() and associate_rhs(). The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is stored internally and must be retrieved with get_solution().\n\n\n\n\n\nSolve the system registered with the Mumps object mumps. The matrix and right-hand side(s) must have been previously registered with associate_matrix() and associate_rhs(). The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is stored internally and must be retrieved with get_solution().\n\n\n\n\n\nSolve the system registered with the Mumps object mumps. The matrix and right-hand side(s) must have been previously registered with associate_matrix() and associate_rhs(). The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is stored internally and must be retrieved with get_solution().\n\n\n\n\n\nSolve the system registered with the Mumps object mumps. The matrix and right-hand side(s) must have been previously registered with associate_matrix() and associate_rhs(). The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is stored internally and must be retrieved with get_solution().\n\n\n\n\n\n","category":"function"},{"location":"api/#MUMPS.solve","page":"API","title":"MUMPS.solve","text":"Combined associate_rhs / solve. Presume that rhs is available on all nodes. The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is retrieved and returned.\n\n\n\n\n\nCombined analyze / factorize / solve. Presume that A and rhs are available on all nodes. The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is retrieved and returned.\n\n\n\n\n\nCombined initialize / analyze / factorize / solve. Presume that A and rhs are available on all nodes. The optional keyword argument sym indicates the symmetry of A. The solution is retrieved and returned.\n\n\n\n\n\n","category":"function"},{"location":"api/#MUMPS.associate_matrix!","page":"API","title":"MUMPS.associate_matrix!","text":"Register the matrix A with the Mumps object mumps. This function makes it possible to define the matrix on the host only. If the matrix is defined on all nodes, there is no need to use this function.\n\n\n\n\n\nRegister the matrix A with the Mumps object mumps. This function makes it possible to define the matrix on the host only. If the matrix is defined on all nodes, there is no need to use this function.\n\n\n\n\n\nRegister the matrix A with the Mumps object mumps. This function makes it possible to define the matrix on the host only. If the matrix is defined on all nodes, there is no need to use this function.\n\n\n\n\n\nRegister the matrix A with the Mumps object mumps. This function makes it possible to define the matrix on the host only. If the matrix is defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"function"},{"location":"api/#MUMPS.associate_rhs!","page":"API","title":"MUMPS.associate_rhs!","text":"Register the right-hand side(s) rhs with the Mumps object mumps. This function makes it possible to define the right- -hand side(s) on the host only. If the right-hand side(s) are defined on all nodes, there is no need to use this function.\n\n\n\n\n\nRegister the right-hand side(s) rhs with the Mumps object mumps. This function makes it possible to define the right- -hand side(s) on the host only. If the right-hand side(s) are defined on all nodes, there is no need to use this function.\n\n\n\n\n\nRegister the right-hand side(s) rhs with the Mumps object mumps. This function makes it possible to define the right- -hand side(s) on the host only. If the right-hand side(s) are defined on all nodes, there is no need to use this function.\n\n\n\n\n\nRegister the right-hand side(s) rhs with the Mumps object mumps. This function makes it possible to define the right- -hand side(s) on the host only. If the right-hand side(s) are defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"function"},{"location":"api/#MUMPS.get_solution","page":"API","title":"MUMPS.get_solution","text":"Retrieve the solution of the system solved by solve(). This function makes it possible to ask MUMPS to assemble the final solution on the host only, and to retrieve it there.\n\n\n\n\n\nRetrieve the solution of the system solved by solve(). This function makes it possible to ask MUMPS to assemble the final solution on the host only, and to retrieve it there.\n\n\n\n\n\nRetrieve the solution of the system solved by solve(). This function makes it possible to ask MUMPS to assemble the final solution on the host only, and to retrieve it there.\n\n\n\n\n\nRetrieve the solution of the system solved by solve(). This function makes it possible to ask MUMPS to assemble the final solution on the host only, and to retrieve it there.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"​","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [MUMPS]","category":"page"},{"location":"reference/#Base.finalize-Tuple{Mumps{ComplexF32}}","page":"Reference","title":"Base.finalize","text":"Terminate a Mumps instance.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.finalize-Tuple{Mumps{ComplexF64}}","page":"Reference","title":"Base.finalize","text":"Terminate a Mumps instance.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.finalize-Tuple{Mumps{Float32}}","page":"Reference","title":"Base.finalize","text":"Terminate a Mumps instance.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.finalize-Tuple{Mumps{Float64}}","page":"Reference","title":"Base.finalize","text":"Terminate a Mumps instance.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.associate_matrix!-Union{Tuple{Ti}, Tuple{Mumps{ComplexF32}, SparseArrays.SparseMatrixCSC{ComplexF32, Ti}}} where Ti<:Int32","page":"Reference","title":"MUMPS.associate_matrix!","text":"Register the matrix A with the Mumps object mumps. This function makes it possible to define the matrix on the host only. If the matrix is defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.associate_matrix!-Union{Tuple{Ti}, Tuple{Mumps{ComplexF64}, SparseArrays.SparseMatrixCSC{ComplexF64, Ti}}} where Ti<:Int32","page":"Reference","title":"MUMPS.associate_matrix!","text":"Register the matrix A with the Mumps object mumps. This function makes it possible to define the matrix on the host only. If the matrix is defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.associate_matrix!-Union{Tuple{Ti}, Tuple{Mumps{Float32}, SparseArrays.SparseMatrixCSC{Float32, Ti}}} where Ti<:Int32","page":"Reference","title":"MUMPS.associate_matrix!","text":"Register the matrix A with the Mumps object mumps. This function makes it possible to define the matrix on the host only. If the matrix is defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.associate_matrix!-Union{Tuple{Ti}, Tuple{Mumps{Float64}, SparseArrays.SparseMatrixCSC{Float64, Ti}}} where Ti<:Int32","page":"Reference","title":"MUMPS.associate_matrix!","text":"Register the matrix A with the Mumps object mumps. This function makes it possible to define the matrix on the host only. If the matrix is defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.associate_rhs!-Tuple{Mumps{ComplexF32}, Array{ComplexF32}}","page":"Reference","title":"MUMPS.associate_rhs!","text":"Register the right-hand side(s) rhs with the Mumps object mumps. This function makes it possible to define the right- -hand side(s) on the host only. If the right-hand side(s) are defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.associate_rhs!-Tuple{Mumps{ComplexF64}, Array{ComplexF64}}","page":"Reference","title":"MUMPS.associate_rhs!","text":"Register the right-hand side(s) rhs with the Mumps object mumps. This function makes it possible to define the right- -hand side(s) on the host only. If the right-hand side(s) are defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.associate_rhs!-Tuple{Mumps{Float32}, Array{Float32}}","page":"Reference","title":"MUMPS.associate_rhs!","text":"Register the right-hand side(s) rhs with the Mumps object mumps. This function makes it possible to define the right- -hand side(s) on the host only. If the right-hand side(s) are defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.associate_rhs!-Tuple{Mumps{Float64}, Array{Float64}}","page":"Reference","title":"MUMPS.associate_rhs!","text":"Register the right-hand side(s) rhs with the Mumps object mumps. This function makes it possible to define the right- -hand side(s) on the host only. If the right-hand side(s) are defined on all nodes, there is no need to use this function.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.factorize!-Tuple{Mumps{ComplexF32}}","page":"Reference","title":"MUMPS.factorize!","text":"Factorize the matrix registered with the Mumps instance. The matrix must have been previously registered with associate_matrix(). After the factorization, the determinant, if requested, is stored in mumps.det. The MUMPS error code is stored in mumps.err. \n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.factorize!-Tuple{Mumps{ComplexF64}}","page":"Reference","title":"MUMPS.factorize!","text":"Factorize the matrix registered with the Mumps instance. The matrix must have been previously registered with associate_matrix(). After the factorization, the determinant, if requested, is stored in mumps.det. The MUMPS error code is stored in mumps.err. \n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.factorize!-Tuple{Mumps{Float32}}","page":"Reference","title":"MUMPS.factorize!","text":"Factorize the matrix registered with the Mumps instance. The matrix must have been previously registered with associate_matrix(). After the factorization, the determinant, if requested, is stored in mumps.det. The MUMPS error code is stored in mumps.err. \n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.factorize!-Tuple{Mumps{Float64}}","page":"Reference","title":"MUMPS.factorize!","text":"Factorize the matrix registered with the Mumps instance. The matrix must have been previously registered with associate_matrix(). After the factorization, the determinant, if requested, is stored in mumps.det. The MUMPS error code is stored in mumps.err. \n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.factorize!-Union{Tuple{Ti}, Tuple{Tv}, Tuple{Tm}, Tuple{Mumps{Tm}, SparseArrays.SparseMatrixCSC{Tv, Ti}}} where {Tm<:Union{Float32, Float64, ComplexF32, ComplexF64}, Tv<:Number, Ti<:Integer}","page":"Reference","title":"MUMPS.factorize!","text":"Combined associate_matrix / factorize. Presume that A is available on all nodes.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.factorize!-Union{Tuple{Tv}, Tuple{Tm}, Tuple{Mumps{Tm}, Array{Tv}}} where {Tm<:Union{Float32, Float64, ComplexF32, ComplexF64}, Tv<:Number}","page":"Reference","title":"MUMPS.factorize!","text":"Combined associate_matrix / factorize. Presume that A is available on all nodes.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.get_icntl-Tuple{}","page":"Reference","title":"MUMPS.get_icntl","text":"Obtain an array of integer control parameters.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.get_solution-Tuple{Mumps{ComplexF32}}","page":"Reference","title":"MUMPS.get_solution","text":"Retrieve the solution of the system solved by solve(). This function makes it possible to ask MUMPS to assemble the final solution on the host only, and to retrieve it there.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.get_solution-Tuple{Mumps{ComplexF64}}","page":"Reference","title":"MUMPS.get_solution","text":"Retrieve the solution of the system solved by solve(). This function makes it possible to ask MUMPS to assemble the final solution on the host only, and to retrieve it there.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.get_solution-Tuple{Mumps{Float32}}","page":"Reference","title":"MUMPS.get_solution","text":"Retrieve the solution of the system solved by solve(). This function makes it possible to ask MUMPS to assemble the final solution on the host only, and to retrieve it there.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.get_solution-Tuple{Mumps{Float64}}","page":"Reference","title":"MUMPS.get_solution","text":"Retrieve the solution of the system solved by solve(). This function makes it possible to ask MUMPS to assemble the final solution on the host only, and to retrieve it there.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.solve!-Tuple{Mumps{ComplexF32}}","page":"Reference","title":"MUMPS.solve!","text":"Solve the system registered with the Mumps object mumps. The matrix and right-hand side(s) must have been previously registered with associate_matrix() and associate_rhs(). The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is stored internally and must be retrieved with get_solution().\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.solve!-Tuple{Mumps{ComplexF64}}","page":"Reference","title":"MUMPS.solve!","text":"Solve the system registered with the Mumps object mumps. The matrix and right-hand side(s) must have been previously registered with associate_matrix() and associate_rhs(). The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is stored internally and must be retrieved with get_solution().\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.solve!-Tuple{Mumps{Float32}}","page":"Reference","title":"MUMPS.solve!","text":"Solve the system registered with the Mumps object mumps. The matrix and right-hand side(s) must have been previously registered with associate_matrix() and associate_rhs(). The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is stored internally and must be retrieved with get_solution().\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.solve!-Tuple{Mumps{Float64}}","page":"Reference","title":"MUMPS.solve!","text":"Solve the system registered with the Mumps object mumps. The matrix and right-hand side(s) must have been previously registered with associate_matrix() and associate_rhs(). The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is stored internally and must be retrieved with get_solution().\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.solve-Union{Tuple{Ti}, Tuple{Tr}, Tuple{Tv}, Tuple{SparseArrays.SparseMatrixCSC{Tv, Ti}, Array{Tr}}} where {Tv<:Number, Tr<:Number, Ti<:Int32}","page":"Reference","title":"MUMPS.solve","text":"Combined initialize / analyze / factorize / solve. Presume that A and rhs are available on all nodes. The optional keyword argument sym indicates the symmetry of A. The solution is retrieved and returned.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.solve-Union{Tuple{Ti}, Tuple{Tr}, Tuple{Tv}, Tuple{Tm}, Tuple{Mumps{Tm}, SparseArrays.SparseMatrixCSC{Tv, Ti}, Array{Tr}}} where {Tm<:Union{Float32, Float64, ComplexF32, ComplexF64}, Tv<:Number, Tr<:Number, Ti<:Integer}","page":"Reference","title":"MUMPS.solve","text":"Combined analyze / factorize / solve. Presume that A and rhs are available on all nodes. The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is retrieved and returned.\n\n\n\n\n\n","category":"method"},{"location":"reference/#MUMPS.solve-Union{Tuple{Tv}, Tuple{Tm}, Tuple{Mumps{Tm}, Array{Tv}}} where {Tm<:Union{Float32, Float64, ComplexF32, ComplexF64}, Tv<:Number}","page":"Reference","title":"MUMPS.solve","text":"Combined associate_rhs / solve. Presume that rhs is available on all nodes. The optional keyword argument transposed indicates whether the user wants to solve the forward or transposed system. The solution is retrieved and returned.\n\n\n\n\n\n","category":"method"},{"location":"#Home","page":"Home","title":"MUMPS.jl documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"MUMPS is a library for the solution of large linear systems using a factorization. Structure can be exploited, such as symmetry, or symmetry and definiteness. The factorization and solve phases can be performed in parallel.","category":"page"},{"location":"#How-to-Install","page":"Home","title":"How to Install","text":"","category":"section"},{"location":"#Prerequisites","page":"Home","title":"Prerequisites","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Because BinDeps is essentially broken, you must install MUMPS outside of Julia. On macOS, we recommend using Homebrew. On Linux, we recommend using Linuxbrew. In both cases, the commands are the same:","category":"page"},{"location":"","page":"Home","title":"Home","text":"$ brew tap brewsci/num\n$ brew install brewsci-mumps  # use brew options brewsci-mumps for build options","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note: apt-get install libmumps-dev installs a version of OpenMPI that is too old for MPI.jl. See the Troubleshooting section below.","category":"page"},{"location":"","page":"Home","title":"Home","text":"All examples above install OpenMPI. If you wish to use MPICH, you will have to build MUMPS by hand.","category":"page"},{"location":"#Building-MUMPS.jl","page":"Home","title":"Building MUMPS.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If MUMPS and SCALAPACK are not in standard locations where BinDeps will find them, you can help by setting the environment variables MUMPS_PREFIX and SCALAPACK_PREFIX.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The Homebrew and Linuxbrew methods above install MUMPS and SCALAPACK in nonstandard locations. You can define","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ENV[\"MUMPS_PREFIX\"] = \"/usr/local/opt/brewsci-mumps\"\njulia> ENV[\"SCALAPACK_PREFIX\"] = \"/usr/local/opt/brewsci-scalapack\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"on macOS, and something of the form","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ENV[\"MUMPS_PREFIX\"] = \"/home/linuxbrew/.linuxbrew/opt/brewsci-mumps\"\njulia> ENV[\"SCALAPACK_PREFIX\"] = \"/home/linuxbrew/.linuxbrew/opt/brewsci-scalapack\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"on Linux.","category":"page"},{"location":"","page":"Home","title":"Home","text":"At the Julia prompt, type","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg\njulia> Pkg.clone(\"https://github.com/JuliaSmoothOptimizers/MUMPS.jl.git\")\njulia> Pkg.build(\"MUMPS\")\njulia> Pkg.test(\"MUMPS\")","category":"page"},{"location":"#Troubleshooting","page":"Home","title":"Troubleshooting","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"On macOS or Linux, if you see the error message","category":"page"},{"location":"","page":"Home","title":"Home","text":"[ 11%] Building Fortran object CMakeFiles/gen_constants.dir/gen_constants.f90.o\n│ /home/ubuntu/.julia/packages/MPI/U5ujD/deps/gen_constants.f90:43:43:\n│\n│    call output(\"MPI_NO_OP       \", MPI_NO_OP)\n│                                            1\n│ Error: Symbol ‘mpi_no_op’ at (1) has no IMPLICIT type","category":"page"},{"location":"","page":"Home","title":"Home","text":"your OpenMPI library is too old.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you are running macOS and see error messages of the form","category":"page"},{"location":"","page":"Home","title":"Home","text":"PMIx has detected a temporary directory name that results in a path that is too long for the Unix domain socket:\n\n  Temp dir:\n  /var/folders/rq/p5nq9tv17p5drlk49755jjz80000gn/T/openmpi-sessions-501@your_computer_name_0/44473\n\nTry setting your TMPDIR environmental variable to point to something shorter in length","category":"page"},{"location":"","page":"Home","title":"Home","text":"simply exit Julia and set the environment variable TMPDIR to, e.g., \\tmp:","category":"page"},{"location":"","page":"Home","title":"Home","text":"$ export TMPDIR=/tmp","category":"page"},{"location":"","page":"Home","title":"Home","text":"The issue has to do with OpenMPI and is documented in their faq.","category":"page"},{"location":"#How-to-Use","page":"Home","title":"How to Use","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The main data type holding information on a factorization is Mumps. Remember to initialize MPI before attempting to create a Mumps object. A simple session is as follows:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using MUMPS\njulia> using MPI\njulia> MPI.Init()\njulia> A = sprand(10, 10, .2) + speye(10); rhs = rand(10)\njulia> x = solve(A, rhs)  # Mumps object is created and destroyed\njulia> norm(x - A \\ rhs) / norm(x)\n2.640677159735313e-16\njulia> MPI.Finalize()     # if you're finished","category":"page"},{"location":"","page":"Home","title":"Home","text":"It is possible to separate the initialization, the analysis/factorization, and the solve phases. It is also possible to access the information reported by MUMPS after the factorization and solve phases, and to modify this information (e.g., to perform iterative refinement).","category":"page"},{"location":"","page":"Home","title":"Home","text":"When creating an instance of a Mumps object explicitly, it is important to specify in advance what arithmetic should be used. Single and double precision real (Float32 and Float64) and complex (Complex64 and Complex128) arithmetics are supported.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For instance,","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> MPI.Init()\njulia> mumps = Mumps{Float64}(mumps_unsymmetric, default_icntl, default_cntl64)  # Real, general unsymmetric\njulia> A = sparse(rand(4,4)); rhs = rand(4)       # Happens on all cores\njulia> associate_matrix!(mumps, A)\njulia> factorize!(mumps)\njulia> associate_rhs!(mumps, rhs)\njulia> solve!(mumps)\njulia> x = get_solution(mumps)\njulia> finalize(mumps)\njulia> MPI.Finalize()","category":"page"},{"location":"","page":"Home","title":"Home","text":"Once the arithmetic of the Mumps instance has been specified, it cannot be changed. The module is flexible in that various data types may be used to define the matrix to be factorized and the right-hand side, and appropriate conversions will take place. Dense matrices may be used, and they will be converted to sparse format.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For intance,","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> mumps = Mumps{Complex128}(mumps_unsymmetric, default_icntl, default_cntl64)\njulia> A = rand(Int16, 4, 4); rhs = rand(Float32, 4)\njulia> associate_matrix!(mumps, A)  # A is converted to a sparse Complex128 matrix\njulia> associate_rhs!(mumps, rhs)   # rhs is converted to a Complex128 array","category":"page"},{"location":"","page":"Home","title":"Home","text":"See test for more examples.","category":"page"},{"location":"#Constants-and-Methods-Exposed","page":"Home","title":"Constants and Methods Exposed","text":"","category":"section"},{"location":"#Constants","page":"Home","title":"Constants","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The following convenience constants may be used when initializing a Mumps object:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Constant Meaning\nmumps_unsymmetric matrix is general unsymmetric (or symmetry is unknown)\nmumps_definite matrix is symmetric and (positive or negative) definite\nmumps_symmetric matrix is symmetric but indefinite (or definiteness is unknown)\ndefault_icntl array of default integer parameters\ndefault_cntl32 array of default real parameters in single precision\ndefault_cntl64 array of default real parameters in double precision","category":"page"},{"location":"","page":"Home","title":"Home","text":"See Sections 5.1 and 5.2 of the MUMPS User's Manual for a description of the integer and real control arrays.","category":"page"},{"location":"#Methods","page":"Home","title":"Methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Mumps object is created using the default constructor, which must be supplied with:","category":"page"},{"location":"","page":"Home","title":"Home","text":"the data type for the arithmetic to be used, as a type parameter, i.e., Mumps{Float64}(...) or Mumps{Complex128}(...)\nsym: one of the constants mumps_unsymmetric, mumps_definite or mumps_symmetric. Note that there is no support for Hermitian complex matrices in MUMPS. Therefore, we recommend to always use mumps_unsymmetric for complex data.\nicntl: an integer parameters array (see the MUMPS Users's Manual)\ncntl: a real parameters array (see the MUMPS Users's Manual)","category":"page"},{"location":"","page":"Home","title":"Home","text":"The convenience function get_icntl() returns an array of integer parameters corresponding to certain commonly-used options. Its arguments are all optional:","category":"page"},{"location":"","page":"Home","title":"Home","text":"det: a boolean indicating whether the determinant should be computed (default: false)\nverbose: a boolean (default: false)\nooc: a boolean indicating whether factors should be stored out of core (default: false)\nitref: the number of iterative refinement steps (default: 0).","category":"page"},{"location":"","page":"Home","title":"Home","text":"A Mumps object is destroyed by calling the finalize() method. Because finalize still issues MPI commands, it is important to call finalize() before calling MPI.Finalize().","category":"page"},{"location":"","page":"Home","title":"Home","text":"Method Description\nfinalize Finalize a Mumps object. Must be done before calling MPI.Finalize()\nassociate_matrix! Register a matrix with the Mumps object. This function makes it possible to define the data on the host only.\nfactorize! Factorize the matrix registered with the Mumps object.\nassociate_rhs! Register right-hand sides with the Mumps object. This function makes it possible to define the data on the host only.\nsolve! Solve the linear system for the given right-hand side.\nget_solution Retrieve the solution from the Mumps object. This function makes it possible for the solution to be assembled on the host only.","category":"page"},{"location":"#Parallel-Execution","page":"Home","title":"Parallel Execution","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"MPI is controled by way of MPI.jl. Look for the lines that say NUMBER OF WORKING PROCESSES in the output of","category":"page"},{"location":"","page":"Home","title":"Home","text":"mpirun -np 4 julia examples/mumps_mpi.jl","category":"page"},{"location":"#To-Do-(Pull-Requests-Welcome!)","page":"Home","title":"To Do (Pull Requests Welcome!)","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"[X] Support double precision complex arithmetic (in 99c23fe)\n[X] Support single precision real and complex arithmetic (in 654814a)\n[ ] Support distributed matrices / vectors\n[ ] User-selected permutation\n[X] Out-of-core option (in 73e829b)\n[X] Determinant (in 73e829b)\n[ ] Compute entries of the inverse\n[X] Control iterative refinement (in 73e829b)\n[ ] Obtain a Schur complement\n[ ] Solve with sparse right-hand sides\n[ ] Sequential, version with no MPI requirement","category":"page"}]
}