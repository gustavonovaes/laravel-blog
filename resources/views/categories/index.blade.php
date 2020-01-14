@extends('layouts.app')

@section('content')

<div class="d-flex justify-content-end mb-2">
    <a href="{{ route('categories.create') }}"
       class="btn btn-success">Add Category</a>
</div>

<div class="card card-default">
    <div class="card-header">
        Categories
    </div>

    <div class="card-body">
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Count</th>
                <th></th>
            </thead>
            <tbody>

                @if ($categories->isEmpty())
                <tr>
                    <td colspan="3"
                        class="text-center">
                        Empty
                    </td>
                </tr>
                @endif

                @foreach ($categories as $category)
                <tr>
                    <td>{{ $category->name }}</td>
                    <td>{{ $category->posts->count() }}</td>
                    <td class="text-right">
                        <a href="{{ route('categories.edit', $category->id) }}"
                           class="btn btn-info btn-sm">Edit</a>

                        <button onclick="handleDelete({{ $category->id }})"
                                class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>

        <div id="deleteModal"
             class="modal"
             tabindex="-1"
             role="dialog">
            <div class="modal-dialog"
                 role="document">
                <form id="deleteCategoryForm"
                      method="post">
                    @method('delete')
                    @csrf

                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Delete Category</h5>
                            <button type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="text-center">Are you sure you want to delete this category?
                            </p>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal">No, Go back</button>
                            <button type="submit"
                                    class="btn btn-danger">Yes, delete</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script defer>
    function handleDelete(categoryId) {
        const form = document.getElementById("deleteCategoryForm");
        form.action = `/categories/${categoryId}`;
        $("#deleteModal").modal('show');
    }
</script>
@endsection
