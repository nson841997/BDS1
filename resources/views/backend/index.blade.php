@extends('backend.master.master')
@section('title','Admin - Quản trị website')
@section('content')
    
<div class="content-wrapper">

  @if (session('status'))
  <div class="alert alert-success" role="alert">
      {{ session('status') }}
  </div>
  @endif

  <!-- Main content -->

  <!-- /.content -->
</div>

@endsection